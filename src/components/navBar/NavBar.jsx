import logo from '../../assets/logo-cf.svg';
import scrollToRef from "../../utils/scrollToRef";

const NavBar = ({ tabSection }) => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <nav className='z-30 w-screen fixed bg-black/10 backdrop-blur-sm h-[4.25rem] flex items-center px-16'>
            <div className="flex justify-between w-full">
                <div className="w-40 cursor-pointer"
                onClick={() => scrollTop()}>
                    <img src={logo} alt="CF moto logo" className="w-full block drop-shadow-sm" />
                </div>
                <ul className='flex gap-6 font-medium tracking-wide'>
                    <li className='navLi cursor-pointer px-6 py-1 relative transition-colors ease-linear
                    text-white/90 hover:text-white uppercase'>
                        Nosotros
                    </li>
                    <li className='navLi cursor-pointer px-6 py-1 relative transition-colors ease-linear
                    text-white/90 hover:text-white uppercase'
                    onClick={() => scrollToRef(tabSection.current)}>
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
