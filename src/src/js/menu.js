const headerBtn = document.querySelector('.header__btn');
const headerCross = document.querySelector('.header__cross');
const nav = document.querySelector('.nav');

const headerQuestion = document.querySelector('.header__question');
const headerSupport = document.querySelector('.header__support');

const headerWrite1 = document.querySelector('.header__write-1');
const headerWrite2 = document.querySelector('.header__write-2');





const menuOpen = () =>{
    headerBtn.classList.add('header__btn-active');
    headerCross.classList.add('header__cross-active');
    nav.classList.add('nav-active');
}
const menuClose = () =>{
    headerBtn.classList.remove('header__btn-active');
    headerCross.classList.remove('header__cross-active');
    nav.classList.remove('nav-active');

}



const openWrite = () =>{
    headerWrite1.classList.add('header__write-active-1')
    headerWrite2.classList.add('header__write-active-2')
}

const closeWrite = () =>{
    headerWrite1.classList.remove('header__write-active-1')
    headerWrite2.classList.remove('header__write-active-2')
    headerSupport.classList.remove('header__support-active')
}

const closeWriteMouseout = () =>{
    headerWrite1.classList.remove('header__write-active-1')
    headerWrite2.classList.remove('header__write-active-2')
}


headerBtn.addEventListener('click', () => {
        menuOpen();
});


headerCross.addEventListener('click', () => {
    menuClose();
});


headerQuestion.addEventListener('click', () => {
    headerSupport.classList.toggle('header__support-active');
});



headerWrite1.addEventListener('mousemove', () => {
    openWrite();
});

headerWrite2.addEventListener('mouseout', () => {
    closeWriteMouseout();
});

headerWrite2.addEventListener('click', () => {
    closeWrite();
});