import React from 'react'
import NavbarMain from '../component/NavbarMain'
import BookmarkPage from '../component/Bookmark'

const Bookmark = (props) => {

  return (
    <div className='px-5'>
      <NavbarMain />
      <div className='mt-5'>
        <BookmarkPage/>
      </div>
    </div>
  )
}

export default Bookmark