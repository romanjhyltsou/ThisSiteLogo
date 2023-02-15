const navItemEntry = document.querySelector('.nav__item-entry');
const modalElem = document.querySelector('.modal');




const openModal = () => {
    modalElem.classList.remove('modal-hidden')
    disableScroll();
};

const closeModal = () => {
    modalElem.classList.add('modal-hidden')
    enableScroll()
};

navItemEntry.addEventListener('click', openModal);

modalElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__bg') || target.classList.contains('modal__close')
    || target.classList.contains('modal__g') || target.classList.contains('modal__rect') ||
    target.classList.contains('modal__path')|| target.classList.contains('modal__svg')){
        closeModal()
    } 
});