"use strict";

document.addEventListener('DOMContentLoaded', () => {
    
        // через 60 секунд пребывания пользователя на сайте показывается модальное окно popup
    setTimeout( () => {
        showPopup();
    }, 60000);

    let linksToCall = document.querySelectorAll('a.phone_link');
    linksToCall.forEach( (link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPopup();
        });
    });

    let linkToCallEngineer = document.querySelector('.popup_engineer_btn');
    linkToCallEngineer.addEventListener('click', () => {
        showPopupEngineer();
    });

});

    // popup - модальное окно для звонка
function showPopup() {
    let popup = document.querySelector('.popup'),
        close = popup.querySelector('.popup_close');

    showElemBlock.call(popup);

    close.addEventListener('click', () => {
        hideElem.call(popup);
    });
}

    // popup_engineer - модальное окно для вызова замерщика
function showPopupEngineer() {
    let popup = document.querySelector('.popup_engineer'),
        close = popup.querySelector('.popup_close');

    showElemBlock.call(popup);

    close.addEventListener('click', () => {
        hideElem.call(popup);
    });
}

function showElemBlock() {
    this.style.display = 'block';
}

function hideElem() {
    this.style.display = 'none';
}
