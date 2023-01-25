import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CarouselCard1, CarouselCard2, CarouselCard3 } from '../';

const HeroCarousel = ({ carouselSlides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const autoScroll = /* true */ false
    let slideInterval
    let intervalTimer = 7000

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? carouselSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === carouselSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        if (autoScroll) {
            const autoScrollSlider = () => {
                slideInterval = setInterval(nextSlide, intervalTimer)
            }
            autoScrollSlider()
        }
        return () => clearInterval(slideInterval)
    }, [currentIndex, slideInterval, autoScroll])

    return (
        <div className="h-[70vh] w-full relative">
            <div className='absolute flex gap-8 left-64 bottom-6'>
                <div className="grid place-items-center px-[0.05rem] py-[0.1rem] bg-black/60 cursor-pointer z-40 hover:bg-black
                transition-colors ease-linear"
                onClick={() => prevSlide()}>
                    <FiChevronLeft className="text-white/90 hover:text-[#009bb4] text-5xl transition-colors
                    drop-shadow-sm" />
                </div>
                <div className="grid place-items-center px-[0.05rem] py-[0.1rem] bg-black/60 cursor-pointer z-40 hover:bg-black
                transition-colors ease-linear"
                onClick={() => nextSlide()}>
                    <FiChevronRight className="text-white/90 hover:text-[#009bb4] text-5xl transition-colors
                    drop-shadow-sm" />
                </div>
            </div>
            <div style={{backgroundImage: `url(${carouselSlides[currentIndex].url})`}}
            className="bg-cover bg-center h-full w-full transition-all duration-500 ease-out grid
            place-items-center text-white carousel-bg">
                {currentIndex === 0 ? <CarouselCard1 />
                : currentIndex === 1 ? <CarouselCard2 />
                : currentIndex === 2 ? <CarouselCard3 />
                : null}
            </div>
        </div>
    )
}

export default HeroCarousel;
