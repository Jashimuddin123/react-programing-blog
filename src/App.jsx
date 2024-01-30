

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([])
 
  const handleAddBookmarks =blog=>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
  }

  return (
    <>
      <h1 className='bg-gray-200 text-3xl text-red-300 text-center p-6 underline'>React Programing Blog Site    </h1>
      <Header></Header>
      <div className='md:flex'>
      <Blogs  handleAddBookmarks={ handleAddBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>


      
    </>
  )
}

export default App
