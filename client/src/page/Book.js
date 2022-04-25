import React from 'react'
import NavbarMain from '../component/NavbarMain'
import '../style/book.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Book = (props) => {

    const { data } = useSelector((state) => state.Books)

    const { name } = useParams()
    console.log(name)
    const book = data.filter(item => item.title === name)


    return (
        <div className='px-5'>
            <NavbarMain />
            <div className='mt-5'>
                <div className='photo-container'>
                    <img className='photo' src={book[0].cover_url} alt="" width={200} />
                </div>
                <h1 className='text-center'>{book[0].title}</h1>
                <div className='d-flex justify-content-center'>
                    <p className='text-center mt-3 w-50 text-secondary'>{book[0].description}</p>
                </div>
                <div className='section mt-5'>
                    {book[0].sections.map(item => <div className='mt-4'>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Book