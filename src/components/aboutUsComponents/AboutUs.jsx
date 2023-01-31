import AboutUsCarousel from "./AboutUsCarousel";
import AboutUsCards from "./AboutUsCards";

const AboutUs = ({ aboutUsSection }) => {
    return (
        <div className='w-full grid place-items-center mt-14' ref={aboutUsSection}>
            <h2 className="tracking-[0.005rem]">sobre cfmoto</h2>
            <div className='w-full flex items-center justify-between px-16 mt-14'>
                <div className="flex flex-col self-start gap-4">
                    <h4 className='text-4xl font-bold uppercase self-start relative title'>panorama de cfmoto</h4>
                    <div className="flex flex-col gap-4 mt-1 pr-32">
                        <p className='mt-2'>
                            Fundada en 1989, <b>CFMOTO</b> se ha esforzado todo el tiempo por desarrollar, fabricar, promocionar y entregar 
                            motocicletas, vehículos todo terreno, vehículos utilitarios Side-by-Side, motores para deportes motorizados, 
                            repuestos, engranajes y accesorios de alta calidad, que se distribuyen a través de más de 3000 colaboradores 
                            en todo el mundo.
                        </p>
                        <p>
                            CFMOTO se encuentra en la punta de la industria de los deportes de motor y tiene como  objetivo proporcionar 
                            productos de alto rendimiento, tanto a los distribuidores y como a los fanáticos de todo el mundo.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[30rem]">
                        <img src="https://i.ibb.co/NNJvbvf/20180516184432.jpg" alt="CFORCE" className='block w-full' />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center w-full px-16">
                <AboutUsCards />
                <AboutUsCarousel />
            </div>
        </div>
    )
}

export default AboutUs;
