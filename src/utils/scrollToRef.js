const scrollToRef = (ref) => {
    window.scrollTo({
        top: ref.offsetTop - 237,
        behavior: "smooth",
    })
}

export default scrollToRef;
