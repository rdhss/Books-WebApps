const initialState = {
    data: [],
    error: null,
    bookmark: []
}


const FetchBooks = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_BOOKS_REQUEST':
            return { ...state, loading: true };
        case 'GET_BOOKS_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'GET_BOOKS_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'GET_BOOKMARKS_SUCCESS':
            return { ...state, loading: false, bookmark: [...state.bookmark, action.payload] };
        case 'DELETE_BOOKMARKS_SUCCESS':
            return { ...state, loading: false, bookmark: [...state.bookmark.filter(item => item.id !== action.payload)] };
        default:
            return state;
    }

}

export default FetchBooks
