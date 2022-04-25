import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './page/Main';
import Category from './page/Category'
import Bookmark from './page/Bookmarks';
import SearchResultPage from './page/searchResult';
import Book from './page/Book';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/Happiness&Mindfulness' element={<Category category="Happiness & Mindfulness"/>}></Route>
      <Route path='/Career&Business' element={<Category category="Career & Business"/>}></Route>
      <Route path='/Society&Politics' element={<Category category="Society & Politics"/>}></Route>
      <Route path='/Investment&Finance' element={<Category category="Investment & Finance"/>}></Route>
      <Route path='/Productivity&TimeManagement' element={<Category category="Productivity & Time Management"/>}></Route>
      <Route path='/bookmark' element={<Bookmark category="Bookmark"/>}></Route>
      <Route path='/search/:id' element={<SearchResultPage category="Bookmark"/>}></Route>
      <Route path='/book/:name' element={<Book/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
