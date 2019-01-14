"use strict";

document.addEventListener('DOMContentLoaded', () => {
    
        // popup_engineer - модальное окно для вызова замерщика
        // popup - модальное окно для звонка
        // через 60 секунд пребывания пользователя на сайте показывается модальное окно popup
    setTimeout( () => {
        showPopup('popup');
    }, 60000);

    let linksToCall = document.querySelectorAll('a.phone_link');
    linksToCall.forEach( (link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPopup('popup');
        });
    });

    let linkToCallEngineer = document.querySelector('.popup_engineer_btn');
    linkToCallEngineer.addEventListener('click', () => {
        showPopup('popup_engineer');
    });

});