import React, { useEffect, useState } from 'react'
import '../style/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as bookmark1 } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as bookmark2 } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Bookmark } from '../redux/actions/books'
import { useNavigate } from 'react-router-dom'
import { DeleteBookMarkSuccess } from '../redux/actions/books'


const Card = (props) => {
  const [loading, setLoading] = useState('')
  const dispatch = useDispatch()
  const { bookmark } = useSelector((state)=>state.Books)
  const navigate = useNavigate()
  const bookmarkIcon = bookmark.map(item => item.id)

  const click = (number) => {
    setLoading('icon')
    dispatch(Bookmark(number))
    console.log(bookmark)
  }

  useEffect(() => {
    setLoading('')
  },[bookmark])

  const clickOut = (number) => {
    dispatch(DeleteBookMarkSuccess(number))
  }
  return (
    <div className='card-main col-auto p-0 d-flex align-items-center flex-column mt-3'>
    {bookmarkIcon.includes(props.id) ?
    <div className='bookmark position-absolute'>
    <FontAwesomeIcon icon={bookmark1} size='xl' onClick={() => clickOut(props.id)}/>
    </div>
    :
    <div className='bookmark position-absolute'>
    <FontAwesomeIcon className={loading} icon={bookmark2} size='xl' onClick={() => click(props.id)}/>
    </div>
    }
        <img className='card-image' src={props.img} alt="" />
    <h1 className='title' onClick={() => navigate(`/book/${props.title}`)}>{props.title}</h1>
    <p>{props.author}</p>
    </div>
  )
}

export default Card