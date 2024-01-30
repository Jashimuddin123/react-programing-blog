import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 border border-black  text-center mt-10 ml-4">
            <h1 className="text-2xl font-semibold underline">Bookmarks Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx)=><Bookmark key={idx}
                 bookmark={bookmark}>

                </Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}
export default Bookmarks;