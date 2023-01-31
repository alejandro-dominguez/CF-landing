const scrollToRef = (ref , n) => {
    window.scrollTo({
        top: ref.offsetTop - n,
        behavior: "smooth",
    })
}

export default scrollToRef;
