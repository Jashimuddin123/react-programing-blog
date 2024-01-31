import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 border-black  text-center mt-6 ml-4">
            <div className=' bg-black text-white border rounded p-4'>
                <h3 className='text-3xl'>Reading Time :{readingTime}</h3>
            </div>
            <div className='bg-red-400 p-4 rounded mt-4'>

            <h1 className="text-2xl font-semibold underline">Bookmarks Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx)=><Bookmark key={idx}
                 bookmark={bookmark}>

                </Bookmark>)
            }
            </div>
          
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired

}
export default Bookmarks;