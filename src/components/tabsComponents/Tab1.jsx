import React from 'react';

const Tab1 = () => {
    return (
        <div className='w-full flex justify-between items-center px-14 min-h-[350px]'>
            <div className="flex flex-col justify-start items-start w-1/2 gap-2">
                <h4 className='text-4xl font-bold relative title'>CFORCE 1000</h4>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error nostrum laboriosam vero maiores eos 
                    necessitatibus provident saepe esse ipsam, fugit nisi explicabo iusto, numquam libero dolore soluta hic qui velit.
                </p>
                <p className='mt-1'>
                    Eaque, accusamus numquam saepe magnam iste, impedit velit incidunt expedita 
                    nemo atque maiores adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error nostrum laboriosam.
                </p>
                <button type='button' className='px-5 py-3 mt-3 bg-[#009bb4] rounded-full font-RobotoSlab text-white
                font-semibold uppercase tracking-wider text-sm'>
                    Ver detalles
                </button>
            </div>
            <div className='w-[30rem] tabImg relative'>
                <img src="https://i.ibb.co/9q0GKDr/CFORCE-520-L-True-Timber-Camo-Left-45-168.png" alt="CFORCE"
                className='w-full block dropShadow' />
            </div>
        </div>
    )
}

export default Tab1;
