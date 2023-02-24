import { useState } from 'react';
import { ImCross } from 'react-icons/im';

const Tab3 = () => {
    const [showDetail, setShowDetail] = useState(false)
    
    return (
        <div className='w-full flex justify-between items-center px-14 min-h-[350px]'>
            <div className="flex flex-col justify-start items-start w-1/2 gap-2">
                <h4 className='text-4xl font-bold relative title'>ZFORCE 1000 SPORT</h4>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error nostrum laboriosam vero maiores eos 
                    necessitatibus provident saepe esse ipsam, fugit nisi explicabo iusto, numquam libero dolore soluta hic qui velit.
                </p>
                <p className='mt-1'>
                    Eaque, accusamus numquam saepe magnam iste, impedit velit incidunt expedita 
                    nemo atque maiores adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error nostrum laboriosam.
                </p>
                <button type='button' className='px-5 py-3 mt-3 bg-[#009bb4] rounded-full font-RobotoSlab text-white
                font-semibold uppercase tracking-wider text-sm hover:bg-[#02437f] transition-colors'
                onClick={() => setShowDetail(true)}>
                    Ver detalles
                </button>
            </div>
            <div className='w-[30rem] tabImg relative'>
                <img src="https://i.ibb.co/mGyCsdW/MY2022-ZFORCE1000-SPORT-Left45-Ferrari-Red.png" alt="ZFORCE"
                className='w-full block dropShadow' />
            </div>
            {showDetail ?
            <div className="absolute w-full grid place-items-center">
                <div className="relative w-full grid place-items-center">
                    <div style={{backgroundImage: "url(https://i.ibb.co/F5pv0G5/ZForce1000-Sporte-ficha.jpg)"}}
                    className="w-[37.5rem] aspect-[4/5] translate-x-1/2 right-[54.5%] -top-[18rem] bg-contain bg-no-repeat
                    drop-shadow-2xl absolute block" />
                    <div className="absolute right-[31.7%] -top-[17.25rem] z-10">
                        <ImCross className='text-2xl cursor-pointer text-[#db0f0f] hover:scale-105 transition-transform'
                        onClick={() => setShowDetail(false)}/>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}

export default Tab3;
