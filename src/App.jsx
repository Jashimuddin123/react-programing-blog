

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([])
 const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks =blog=>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (id, time)=>{
const newReadingTime = readingTime + time;
setReadingTime(newReadingTime);
const remainingBooksmark = bookmarks.filter(bookmark =>bookmark.id !==id)
setBookmarks(remainingBooksmark)
  }

  return (
    <>
      <h1 className='bg-gray-200 text-3xl text-red-500 text-center p-6 underline'>React Programing Blog Site    </h1>
      <Header></Header>
      <div className='md:flex'>
      <Blogs  handleAddBookmarks={ handleAddBookmarks}
      handleMarkAsRead ={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
          readingTime ={readingTime}
          ></Bookmarks>
      </div>


      
    </>
  )
}

export default App
