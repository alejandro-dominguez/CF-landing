import logo from '../../assets/logo-cf.svg';

const NavBar = () => {
    return (
        <nav className='z-20 w-screen fixed bg-black/10 backdrop-blur-sm h-[4.25rem] flex items-center px-16'>
            <div className="flex justify-between w-full">
                <div className="w-36">
                    <img src={logo} alt="CF moto logo" className="w-full block" />
                </div>
                <ul className='flex gap-6 font-medium tracking-wide'>
                    <li className='navLi cursor-pointer px-6 py-1 relative transition-colors ease-linear
                    text-white/90 hover:text-white uppercase'>
                        Nosotros
                    </li>
                    <li className='navLi cursor-pointer px-6 py-1 relative transition-colors ease-linear
                    text-white/90 hover:text-white uppercase'>
                        Modelos
                    </li>
                    <li className='navLi cursor-pointer px-6 py-1 relative transition-colors ease-linear
                    text-white/90 hover:text-white uppercase'>
                        Contacto
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
