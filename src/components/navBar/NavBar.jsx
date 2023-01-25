import logo from '../../assets/logo-cf.svg';

const NavBar = () => {
    return (
        <nav className='z-50 w-full fixed bg-black/10 backdrop-blur-sm h-[4.25rem] text-white flex items-center px-16'>
            <div className="flex">
                <div className="w-36">
                    <img src={logo} alt="CF moto logo" className="w-full block" />
                </div>
                <ul className='flex text-white'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
