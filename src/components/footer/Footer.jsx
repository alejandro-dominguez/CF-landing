import { RiInstagramFill, RiFacebookBoxFill } from 'react-icons/ri';


const Footer = () => {
    return (
        <footer className='w-full bg-slate-700 mt-20 flex justify-between items-center px-16 py-4'>
            <small className='text-white text-center text-sm font-light tracking-wide'>&copy; Copyright 2077, Pixel Coffee.</small>
            <div className="flex gap-5 items-center justify-center">
                <a href="https://github.com/alejandro-dominguez" target="_blank" rel="noreferrer">
                    <RiInstagramFill size={45} className="text-slate-100 hover:scale-105 hover:text-[#2cbfc4] transition-all ease-out duration-200" />
                </a>
                <a href="https://github.com/alejandro-dominguez" target="_blank" rel="noreferrer">
                    <RiFacebookBoxFill size={45} className="text-slate-100 hover:scale-105 hover:text-[#2cbfc4] transition-all ease-out duration-200" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
