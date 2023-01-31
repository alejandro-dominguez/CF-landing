import { useState, useRef } from 'react';
import { NavBar, HeroCarousel, TabsContainer, ParallaxBg, AboutUs, Contact, Footer } from '../';

const Landing = () => {
    const carouselSlides = [
        {url: "https://i.ibb.co/Q6BGYkm/RSC4955-wotr-reference.jpg"},
        {url: "https://i.ibb.co/ssz0H7b/Sin-t-tulo-2.jpg"},
        {url: "https://i.ibb.co/27sSP9S/MY2021-CFORCE-625-625-Touring-Action-8.jpg"}
    ]

    const [tabIndex, setTabIndex] = useState(1)
    const tabSection = useRef(null)
    const aboutUsSection = useRef(null)
    const contactSection = useRef(null)

    return (
        <>
        <NavBar tabSection={tabSection} aboutUsSection={aboutUsSection} contactSection={contactSection} />
        <HeroCarousel carouselSlides={carouselSlides} setTabIndex={setTabIndex} tabSection={tabSection} />
        <TabsContainer tabIndex={tabIndex} setTabIndex={setTabIndex} tabSection={tabSection} />
        <ParallaxBg />
        <AboutUs aboutUsSection={aboutUsSection} />
        <Contact contactSection={contactSection} />
        <Footer />
        </>
    )
}

export default Landing;
