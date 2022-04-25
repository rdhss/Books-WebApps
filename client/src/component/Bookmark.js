/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../style/Happiness.css'
import Card from './Card'
import Pagination from './Pagination'
import { GetBooks } from '../redux/actions/books'
import { useDispatch, useSelector } from 'react-redux'



const BookmarkPage = () => {
    const [currentPage, setCurretntPage] = useState(1)
    const [loading, setLoading] = useState(false) 
    const [postsPerPage, setPostsPerPage] = useState(18)
    const {data, bookmark} = useSelector((state)=>state.Books)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(GetBooks())
    console.log(bookmark)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    const pagination = (number) => {
      setLoading(true)
      setCurretntPage(number)
      setLoading(false)
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    return (
        <div className='mt-4'>
            <div className='header'>
                <h1>Bookmark</h1>
            </div>
            {loading ? <h1>loading...</h1> : null}
            <div className='row p-0 d-flex gx-4 justify-content-around'>
            {bookmark.slice(indexOfFirstPost, indexOfLastPost).map((item) => <Card id={item.id} title={item.title} author={item.authors[0]} img={item.cover_url}/>)}                   
            </div>
            <Pagination postPerPage={18} totalPosts={data.length} pagination={pagination}/>
        </div>
    )
}

export default BookmarkPage