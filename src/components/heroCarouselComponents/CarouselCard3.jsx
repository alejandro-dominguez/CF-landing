import { useState, useEffect } from 'react';
import scrollToRef from "../../utils/scrollToRef";

const CarouselCard3 = ({ setTabIndex, tabSection }) => {
    const [activeClass, setActiveClass] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActiveClass(true)
        }, 0);
    }, [])

    const handleClick = () => {
        setTabIndex(3)
        scrollToRef(tabSection.current, 68)
    }

    return (
        <div className='grid grid-cols-2 place-items-center relative w-full px-16'>
            <div className={activeClass ? `flex flex-col items-start gap-4 pt-20 transition-all ease-out duration-[800ms] opacity-100`
            : `flex flex-col items-start gap-4 pt-20 -translate-x-[500px] transition-all ease-out duration-[800ms] opacity-0`}>
                <h3>Lorem ipsum dolor</h3>
                <p className='drop-shadow-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit itaque 
                    eaque quia, expedita ipsam. Exercitationem cupiditate quia pariatur adipisci aut 
                    similique repellendus optio cumque, nobis molestias repellat praesentium assumenda 
                    iste dicta vero at quae consequuntur iusto accusantium! Consequatur quasi inventore 
                    expedita illo quaerat nobis, laudantium consectetur a ratione at?
                </p>
                <button type='button' className='px-5 py-2 mt-2 bg-[#009bb4] rounded-full font-RobotoSlab
                font-semibold uppercase tracking-wider transition-colors text-sm hover:bg-white hover:text-neutral-900
                focus:bg-white focus:text-neutral-900 duration-200'
                onClick={() => handleClick()}>
                    Conoce más
                </button>
            </div>
            <div className="flex flex-col">
                <div className={activeClass ? `absolute top-1 -translate-x-[300px] w-[40rem] transition-all ease-out
                duration-[800ms] opacity-100`
                : `absolute top-1 translate-x-[300px] w-[40rem] transition-all ease-out duration-[800ms] opacity-0`}>
                    <img src="https://i.ibb.co/mGyCsdW/MY2022-ZFORCE1000-SPORT-Left45-Ferrari-Red.png"
                    alt="ZFOCE1000 sport" className='w-full h-full block drop-shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default CarouselCard3;
