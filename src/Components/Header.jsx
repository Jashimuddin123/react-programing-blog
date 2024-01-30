
import profile from '../assets/images/header-img.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-6 border-b-2 p-4'>
            <h1 className="text-2xl font-semibold ">Lets Start Coding</h1>
            <img className='w-20 rounded-full h-20' src={profile} alt="" />
        </header>
    );
};

export default Header;