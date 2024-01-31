import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../BLOG/Blog";


const Blogs = ({ handleAddBookmarks,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 ml-8">
           
            {
                 blogs.map(blog =><Blog
                     key={blog.id}
                      blog={blog}
                      handleAddBookmarks={ handleAddBookmarks}
                      handleMarkAsRead ={handleMarkAsRead}
                      ></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes ={
    handleAddBookmarks:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
    
}
export default Blogs;