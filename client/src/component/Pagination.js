/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from 'react'


const Pagination = (props) => {
  const pageNumbers = []
  
    for(let i = 1; i <= Math.ceil(props.totalPosts / props.postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <div className='mt-3'>
        <ul className="pagination cursor-pointer">
            {pageNumbers.map(item => 
                <li key={item} className="page-item">
                    <a onClick={()=>{props.pagination(item)}} href='#' className='page-link '>
                        {item}
                    </a>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Pagination