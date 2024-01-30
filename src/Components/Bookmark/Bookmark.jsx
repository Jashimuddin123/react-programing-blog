import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div>
            <h3 className='txt-2xl font-semibold p-4 rounded bg-sky-600 text-black mt-4'>{title}</h3>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
}

export default Bookmark;