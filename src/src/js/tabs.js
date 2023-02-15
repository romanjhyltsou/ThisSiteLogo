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
});