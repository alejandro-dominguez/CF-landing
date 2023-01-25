import logo from '../../assets/logo-cf.svg';

const NavBar = () => {
    return (
        <nav className='z-50 w-full fixed bg-black/10 backdrop-blur-sm h-[4.25rem] text-white flex items-center px-16'>
            <div className="flex justify-between w-full">
                <div className="w-36">
                    <img src={logo} alt="CF moto logo" className="w-full block" />
                </div>
                <ul className='flex text-white gap-6 font-medium tracking-wide'>
                    <li className='cursor-pointer bg-transparent px-6 py-[0.35rem] rounded-md grid place-items-center
                    transition-colors hover:bg-[#009BB4]/90'>
                        Nosotros
                    </li>
                    <li className='cursor-pointer bg-transparent px-6 py-[0.35rem] rounded-md grid place-items-center
                    transition-colors hover:bg-[#009BB4]/90'>
                        Modelos
                    </li>
                    <li className='cursor-pointer bg-transparent px-6 py-[0.35rem] rounded-md grid place-items-center
                    transition-colors hover:bg-[#009BB4]/90'>
                        Contacto
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
