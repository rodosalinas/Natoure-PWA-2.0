import React from 'react'
import SearchStyles from '../general/SearchStyles'

interface ISearchBar {
  placeholder: string
  searchText?: string
}

export default function SearchBar({ placeholder, searchText = 'Buscar' }: ISearchBar): JSX.Element {
  return (
    <SearchStyles>
      <input type="text" placeholder={placeholder} />
      <button>{searchText}</button>
    </SearchStyles>
  )
}
