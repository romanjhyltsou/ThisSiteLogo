document.addEventListener('DOMContentLoaded', ()=>{
    const headerBtn = document.querySelector('.header__btn');
const headerCross = document.querySelector('.header__cross');
const nav = document.querySelector('.nav');

const headerQuestion = document.querySelector('.header__question');
const headerSupport = document.querySelector('.header__support');

const headerWrite1 = document.querySelector('.header__write-1');
const headerWrite2 = document.querySelector('.header__write-2');



/* const navActive = document.querySelector('.nav-active'); */

/* const mobMenu = document.querySelector('.mobMenu');
const mobMenuItem = document.querySelectorAll('.mobMenu__item');
const outputImg = document.querySelector('.output__img'); */

const menuOpen = () =>{
    headerBtn.classList.add('header__btn-active');
    headerCross.classList.add('header__cross-active');
    nav.classList.add('nav-active');
    /* enableScroll(); */
}
const menuClose = () =>{
    headerBtn.classList.remove('header__btn-active');
    headerCross.classList.remove('header__cross-active');
    nav.classList.remove('nav-active');
    /* enableScroll(); */
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


/* outputImg.addEventListener('click', ()=> {
        mobMenuClose();
});


btnLine.addEventListener('click', () => {
    mobMenu.classList.remove('mobMenu-active');
    disableScroll();
}); */


/* const disableScroll = () => {
    document.body.dataset.scrollY = window.scrollY;

    document.body.style.cssText =  `
    position:fixed;
    top: -${window.scrollY}px;
    left:0;
    width:100%;
    overflow:hidden;
    height:100vh;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
}; */

/* const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY
    });
}; */
;
    const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smothScrollElems.forEach(link => {
    link.addEventListener('click', (event)=> {
        event.preventDefault();
        
        const id = link.getAttribute('href').substring(1)

        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    })
});
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
});;
    const disableScroll = () => {
    document.body.dataset.scrollY = window.scrollY;  

    document.body.style.cssText =  `
    position:fixed;
    top: -${window.scrollY}px;
    left:0;
    width:100%;
    overflow:hidden;
    height:100vh;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY
    });
};;
    const tabsBtn = document.querySelectorAll(".tab__btn");
const tabContent = document.querySelectorAll(".tab__content");


tabsBtn.forEach( function (item){
    item.addEventListener('click', function(){

        let currenrBtn = item;
        let tabId = currenrBtn.getAttribute("data-tab");
        let currenrTab = document.querySelector(tabId);

        if (currenrBtn.classList.contains('tab__btn-active')){
            item.classList.remove('tab__btn-active');
            currenrTab.classList.remove('tab__content-active');
        }
        else{
            tabsBtn.forEach( function (item){
        
                item.classList.remove('tab__btn-active');
            });
            tabContent.forEach( function (item){
            
                item.classList.remove('tab__content-active');
            });
    
            currenrBtn.classList.add('tab__btn-active');
            currenrTab.classList.add('tab__content-active');
        }


         
    });
});;
});
