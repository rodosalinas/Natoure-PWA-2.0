import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  _id: string
  bio?: string
  phone?: string
  email: string
  photo?: string
  gender?: string
  birthday?: Date
  country?: string
  lastName?: string
  password: string
  firstName: string
  bloodType?: string
}

export interface IAuthPayLoad {
  token: string
}

export interface IUserCreateInput {
  data: { email: string; firstName: string; password: string }
}
export interface IUserLoginInput {
  data: { email: string; password: string }
}

const schema: mongoose.SchemaDefinition = {
  bio: { type: mongoose.SchemaTypes.String },
  phone: { type: mongoose.SchemaTypes.String },
  email: { type: mongoose.SchemaTypes.String, required: true, unique: true },
  photo: { type: mongoose.SchemaTypes.String },
  gender: { type: mongoose.SchemaTypes.String },
  birthday: { type: mongoose.SchemaTypes.String },
  country: { type: mongoose.SchemaTypes.String },
  lastName: { type: mongoose.SchemaTypes.String },
  password: { type: mongoose.SchemaTypes.String, required: true },
  firstName: { type: mongoose.SchemaTypes.String, required: true },
  bloodType: { type: mongoose.SchemaTypes.String },
}

const collectionName = 'user'
const noteSchema: mongoose.Schema = new mongoose.Schema(schema, { timestamps: true })

const User = (conn: mongoose.Connection): mongoose.Model<IUser> =>
  conn.model(collectionName, noteSchema)

export default User
