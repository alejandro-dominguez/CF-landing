import { NavBar, HeroCarousel } from '../';

const Landing = () => {
    const carouselSlides = [
        {url: "https://i.ibb.co/Q6BGYkm/RSC4955-wotr-reference.jpg"},
        {url: "https://i.ibb.co/ssz0H7b/Sin-t-tulo-2.jpg"},
        {url: "https://i.ibb.co/27sSP9S/MY2021-CFORCE-625-625-Touring-Action-8.jpg"}
    ]

    return (
        <>
        <NavBar />
        <HeroCarousel carouselSlides={carouselSlides} />
        </>
    )
}

export default Landing;
