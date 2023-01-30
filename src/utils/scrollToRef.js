const scrollToRef = (ref) => {
    window.scrollTo({
        top: ref.offsetTop - 277,
        behavior: "smooth",
    })
}

export default scrollToRef;
