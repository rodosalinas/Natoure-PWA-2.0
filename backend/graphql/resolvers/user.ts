/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { ApolloError } from 'apollo-server-micro'
import { decodedToken } from '../../decodedToken'
import UserModel, {
  IUser,
  IAuthPayLoad,
  IUserCreateInput,
  IUserLoginInput,
} from '../../database/models/User'
import { NextApiRequest } from 'next'

export default {
  Query: {
    getAllUsers: async (
      _parent,
      _args,
      {
        dbConn,
        req,
      }: { dbConn: mongoose.Connection; req: { req: { headers: { authorization: string } } } }
    ): Promise<IUser[]> => {
      const User: mongoose.Model<IUser> = UserModel(dbConn)

      let list: IUser[]

      try {
        decodedToken(req)
        list = await User.find()
      } catch (error) {
        console.error('> getAllNotes error: ', error)

        throw new ApolloError('Error retrieving all notes')
      }

      return list
    },

    getUser: async (
      _parent,
      { _id }: { _id: IUser['_id'] },
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<IUser> => {
      const Note: mongoose.Model<IUser> = UserModel(dbConn)

      try {
        const note = await Note.findById(_id).exec()

        return note
      } catch (error) {
        console.error('> getNote error: ', error)

        throw new ApolloError('Error retrieving all notes')
      }
    },
  },

  Mutation: {
    signup: async (
      _parent,
      { data: { email, firstName, password } }: IUserCreateInput,
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<IAuthPayLoad> => {
      const User: mongoose.Model<IUser> = UserModel(dbConn)

      try {
        const existingUser = await User.findOne({ email })

        if (existingUser) throw new Error('Unable to create User')

        const user = await User.create({
          email,
          firstName,
          password: bcrypt.hashSync(password, 3),
        })

        return { token: jwt.sign(user.toJSON(), 'supersecret') }
      } catch (error) {
        console.error('> saveNote error: ', error)

        throw new ApolloError('Error creating User')
      }
    },

    login: async (
      _parent,
      { data: { email, password } }: IUserLoginInput,
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<IAuthPayLoad> => {
      const User: mongoose.Model<IUser> = UserModel(dbConn)

      try {
        const user = await User.findOne({ email })

        if (!user) throw new Error('Unable to Login')

        const isMatch = bcrypt.compareSync(password, user.password)

        if (!isMatch) throw new Error('Unable to Login')

        return { token: jwt.sign(user.toJSON(), 'supersecret') }
      } catch (error) {
        console.error('> getNote error: ', error)

        throw new ApolloError('Error retrieving all notes')
      }
    },
  },
}
