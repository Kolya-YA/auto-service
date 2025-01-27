// Smooth Scroll page to top by click on "back to top" button
const btnBTT: HTMLElement | null = document.querySelector('.back-to-top')

if (btnBTT) {
    // Show/Hide button on scroll
    window.addEventListener('scroll', (): void => {
        const isBtnVisible: boolean = window.scrollY > window.innerHeight * 0.75
        btnBTT.style.visibility = isBtnVisible ? 'visible' : 'hidden'
    })

    // Scroll to top on click
    btnBTT.addEventListener('click', ():  void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}
