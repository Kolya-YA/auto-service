console.log('Info Details');

const infoDetails: NodeListOf<HTMLElement> = document.querySelectorAll('.info__details')

infoDetails.forEach((iD: HTMLElement) => {
    iD.addEventListener('click', (event) => {
//         infoDetails.forEach(iD => iD.removeAttribute('open'))
        if (iD.hasAttribute('open')) {
            event.preventDefault()
            iD.classList.add('closing')

            iD.addEventListener('animationend', (event: AnimationEvent) => {
                if (event.animationName === 'close') {
                    iD.classList.remove('closing')
                    iD.removeAttribute('open')
                }
            }, { once: true })
        }
    })
})