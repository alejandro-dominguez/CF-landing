import { useState } from 'react';
import { NavBar, HeroCarousel, TabsContainer } from '../';

const Landing = () => {
    const carouselSlides = [
        {url: "https://i.ibb.co/Q6BGYkm/RSC4955-wotr-reference.jpg"},
        {url: "https://i.ibb.co/ssz0H7b/Sin-t-tulo-2.jpg"},
        {url: "https://i.ibb.co/27sSP9S/MY2021-CFORCE-625-625-Touring-Action-8.jpg"}
    ]

    const [tabIndex, setTabIndex] = useState(1)

    return (
        <>
        <NavBar />
        <HeroCarousel carouselSlides={carouselSlides} setTabIndex={setTabIndex} />
        <TabsContainer tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </>
    )
}

export default Landing;