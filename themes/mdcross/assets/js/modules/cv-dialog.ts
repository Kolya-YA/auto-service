const openCvBtns = document.querySelectorAll('.open-cv') as NodeListOf<HTMLButtonElement>;
const cvDialog = document.querySelector('.cv-dialog') as HTMLDialogElement;
const closeCvBtn = cvDialog.querySelector('.dialog-btn__close') as HTMLButtonElement;

// cvDialog.showModal();

openCvBtns?.forEach(oBtn => {oBtn.addEventListener('click', () => {
    cvDialog.showModal();
    document.body.style.overflow = 'hidden';
    });     
}, false);

closeCvBtn?.addEventListener('click', () => {
    cvDialog.close();
}, false);

cvDialog?.addEventListener('click', ({ target })=> {
    if ((target as HTMLDialogElement).nodeName === 'DIALOG') {
        (target as HTMLDialogElement).close('dismiss');
    }
}, false);

cvDialog?.addEventListener('close', () => {
    document.body.style.overflow = 'auto';     
}, false);