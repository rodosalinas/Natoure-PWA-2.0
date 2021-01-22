import React from 'react'
import FilterStyles from '../general/FilterStyles'
import { AiOutlineSearch } from "react-icons/ai";
import { FaSlidersH } from "react-icons/fa";

interface IFilterBar {
  placeholder: string
  searchText?: string
}

export default function FilterBar({ placeholder, searchText = 'Buscar' }: IFilterBar): JSX.Element {
  return (
    <FilterStyles>
      <button><AiOutlineSearch /></button>
      <input type="text" placeholder={placeholder} />
      <button><FaSlidersH /></button>
    </FilterStyles>
  )
}
