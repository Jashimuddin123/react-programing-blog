
import profile from '../assets/images/header-img.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-6 border-b-2 p-4'>
            <h1 className="text-3xl text-red-600 font-semibold ">Lets <span className='text-blue-500 font-semibold'>Start Coding==</span></h1>
            <img className='w-20 rounded-full h-20' src={profile} alt="" />
        </header>
    );
};

export default Header;