import { useState, useEffect } from 'react';

const CarouselCard1 = () => {
    const [activeClass, setActiveClass] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActiveClass(true)
        }, 0);
    }, [])

    return (
        <div className='grid grid-cols-2 place-items-center relative w-full px-16'>
            <div className={activeClass ? `flex flex-col items-start gap-4 pt-20 transition-all ease-out duration-[800ms]
            overflow-x-hidden opacity-100`
            : `flex flex-col items-start gap-4 pt-20 -translate-x-[500px] transition-all ease-out duration-[800ms]
            overflow-x-hidden opacity-0`}>
                <h2 className='uppercase'>Lorem ipsum dolor</h2>
                <p className='drop-shadow-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit itaque 
                    eaque quia, expedita ipsam. Exercitationem cupiditate quia pariatur adipisci aut 
                    similique repellendus optio cumque, nobis molestias repellat praesentium assumenda 
                    iste dicta vero at quae consequuntur iusto accusantium! Consequatur quasi inventore 
                    expedita illo quaerat nobis, laudantium consectetur a ratione at?
                </p>
                <button type='button' className='px-6 py-3 mt-2 bg-[#009bb4] rounded-full font-RobotoSlab
                font-semibold uppercase tracking-wider transition-colors ease-linear duration-300 text-sm
                hover:bg-white hover:text-black'>
                    Conoce más
                </button>
            </div>
            <div className="flex flex-col">
                <div className={activeClass ? "absolute top-2 -right-12 w-[45rem] transition-all ease-out opacity-100 duration-[800ms] overflow-x-hidden"
                : "absolute top-2 -right-12 translate-x-[500px] w-[45rem] transition-all ease-out duration-[800ms] opacity-0 overflow-x-hidden"}>
                    <img src="https://i.ibb.co/9q0GKDr/CFORCE-520-L-True-Timber-Camo-Left-45-168.png"
                    alt="ZFOCE1000 sport" className='w-full h-full block drop-shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default CarouselCard1;
