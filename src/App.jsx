
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {


  return (
    <>
      <h1 className='bg-red-500 text-2xl text-center p-4'>React Programing Blog Site    </h1>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>


      
    </>
  )
}

export default App
