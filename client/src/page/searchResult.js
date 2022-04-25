import React from 'react'
import NavbarMain from '../component/NavbarMain'
import SearchResult from '../component/SearchResult'

const SearchResultPage = (props) => {

  return (
    <div className='px-5'>
      <NavbarMain />
      <div className='mt-5'>
        <SearchResult/>
      </div>
    </div>
  )
}

export default SearchResultPage