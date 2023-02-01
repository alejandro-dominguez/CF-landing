import inconTec from "../../assets/tecnologia.svg";
import inconQuality from "../../assets/calidad.svg";
import inconValue from "../../assets/valor.svg";

const AboutUsCards = () => {
    return (
        <div className='flex items-center justify-between w-full mt-14 relative'>
            <div className="flex flex-col items-center justify-center w-72 p-6 gap-2 aspect-square bg-white rounded-md text-center
             border-[#009bb4] border-[3px] shadow-lg hover:scale-105 transition-transform z-10">
                <div className="w-20">
                    <img src={inconTec} alt="icon 1" className="block w-full" />
                </div>
                <h5 className='uppercase font-bold text-xl text-black mt-2 tracking-wide'>tecnología</h5>
                <p className='text-sm text-neutral-600 mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestias suscipit, 
                    consectetur minima praesentium possimus eius unde dolore.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-72 p-6 gap-2 aspect-square bg-white rounded-md text-center
             border-[#009bb4] border-[3px] shadow-lg hover:scale-105 transition-transform z-10">
                <div className="w-20 ml-2">
                    <img src={inconQuality} alt="icon 2" className="block w-full" />
                </div>
                <h5 className='uppercase font-bold text-xl text-black mt-2 tracking-wide'>calidad</h5>
                <p className='text-sm text-neutral-600 mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestias suscipit, 
                    consectetur minima praesentium possimus eius unde dolore.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-72 p-6 gap-2 aspect-square bg-white rounded-md text-center
             border-[#009bb4] border-[3px] shadow-lg hover:scale-105 transition-transform z-10">
                <div className="w-20">
                    <img src={inconValue} alt="icon 3" className="block w-full" />
                </div>
                <h5 className='uppercase font-bold text-xl text-black mt-2 tracking-wide'>valor</h5>
                <p className='text-sm text-neutral-600 mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestias suscipit, 
                    consectetur minima praesentium possimus eius unde dolore.
                </p>
            </div>
            <div className="w-full h-6 bg-[#009bb4] absolute">

            </div>
        </div>
    )
}

export default AboutUsCards;
