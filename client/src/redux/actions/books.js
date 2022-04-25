import axios from "axios";
import { parse } from 'flatted'


export const GetBookRequest = ()=> {
    return {
        type: 'GET_BOOKS_REQUEST'
    }
}
export const GetBookSuccess = (data)=> {
    return {
        type: 'GET_BOOKS_SUCCESS',
        payload: data
    }
}

export const GetBookMarkSuccess = (data)=> {
    return {
        type: 'GET_BOOKMARKS_SUCCESS',
        payload: data
    }
}

export const DeleteBookMarkSuccess = (data)=> {
    return {
        type: 'DELETE_BOOKMARKS_SUCCESS',
        payload: data
    }
}

export const GetBookFail = (error)=> {
    return {
        type: 'GET_BOOKS_FAIL',
        payload: error
    }
}


export const GetBooks = () => {
    return (dispatch) => {
        dispatch(GetBookRequest())
        return axios.get('http://localhost:3002/category1', {
            crossdomain: true,
            responseType: 'json',
        }
        )
            .then((res) => {
                const data = parse(res.data)
                console.log(data)
                
                dispatch(GetBookSuccess(data.data))

            }).catch((err) => {
                console.log(err)
                dispatch(GetBookFail(err))
            })
    }
}

export const Bookmark = (id) => {
    return (dispatch) => {
        dispatch(GetBookRequest())
        return axios.get('http://localhost:3002/category1', {
            crossdomain: true,
            responseType: 'json',
        })
        .then((res) => {
            const data = parse(res.data)
            let bookmark = data.data.findIndex(obj => obj.id === id)
            console.log(data)
            dispatch(GetBookMarkSuccess(data.data[bookmark]))

        })
    }
}
