import { useEffect } from "react";
import { useState } from "react";
import Blog from "../BLOG/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 ml-12">
            <h3>blogs{blogs.length}</h3>
            {
                 blogs.map(blog =><Blog
                     key={blog.id}
                      blog={blog}
                      ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;