import PropTypes from 'prop-types';
import { MdBookmarks } from "react-icons/md";
const Blog = ({blog, handleAddBookmarks,handleMarkAsRead}) => {
     const {id,title,cover_img,author,author_img,reading_time_min,post_date,hashtag} = blog
    return (
        <div>
            <img className='rounded mt-6 '  src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex my-4 gap-4 '>
                   <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                   <div>
                    <h1>{author}</h1>
                    <p>{post_date}</p>
                   </div>
                </div>
                <div className='border border-black p-2 hover:bg-blue-400 bg-slate-300 rounded'>
                   <span>{reading_time_min} min read</span>
                   <button onClick={()=> handleAddBookmarks(blog)} className='ml-2 text-red-700'><MdBookmarks></MdBookmarks></button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <h2 className='text-gray-600 text-md my-4'>{hashtag}</h2>
            <button onClick={()=>handleMarkAsRead(id,reading_time_min)} className='text-purple-700 my-2 font-semibold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddBookmarks:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func

   
}
export default Blog;

