import inconTec from "../../assets/tecnologia.svg";
import inconQuality from "../../assets/calidad.svg";
import inconValue from "../../assets/valor.svg";

const AboutUsCards = () => {
    return (
        <div className='flex items-center justify-between w-full mt-14'>
            <div className="flex flex-col items-center justify-center w-72 p-6 gap-2 aspect-square bg-[#009bb4]/80 rounded-md text-center
            text-white shadow-lg hover:scale-[1.045] transition-transform">
                <div className="w-20">
                    <img src={inconTec} alt="icon 1" className="block w-full" />
                </div>
                <h5 className='uppercase font-bold text-lg mt-2'>tecnología</h5>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestias suscipit, 
                    consectetur minima praesentium possimus eius unde dolore.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-72 p-6 gap-2 aspect-square bg-[#009bb4]/80 rounded-md text-center
            text-white shadow-lg hover:scale-[1.045] transition-transform">
                <div className="w-20 ml-2">
                    <img src={inconQuality} alt="icon 2" className="block w-full" />
                </div>
                <h5 className='uppercase font-bold text-lg mt-2'>calidad</h5>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestias suscipit, 
                    consectetur minima praesentium possimus eius unde dolore.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-72 p-6 gap-2 aspect-square bg-[#009bb4]/80 rounded-md text-center
            text-white shadow-lg hover:scale-[1.045] transition-transform">
                <div className="w-20">
                    <img src={inconValue} alt="icon 3" className="block w-full" />
                </div>
                <h5 className='uppercase font-bold text-lg mt-2'>valor</h5>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil molestias suscipit, 
                    consectetur minima praesentium possimus eius unde dolore.
                </p>
            </div>
        </div>
    )
}

export default AboutUsCards;
