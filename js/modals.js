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
            showPopup('popup');
        });
    });

    let linkToCallEngineer = document.querySelector('.popup_engineer_btn');
    linkToCallEngineer.addEventListener('click', () => {
        showPopup('popup_engineer');
    });

});

    // popup_engineer - модальное окно для вызова замерщика
    // popup - модальное окно для звонка
function showPopup(classPopup) {
    let popup = document.querySelector('.' + classPopup),
        close = popup.querySelector('.popup_close');

    showElem.call(popup);

    close.addEventListener('click', () => {
        hideElem.call(popup);
    });

    popup.addEventListener('click', function(event) {
        let e = event || window.event;
        if (e.target == this) {
            hideElem.call(popup);
        }
    });
}

function showElem() {
    console.log(this);
    this.style.display = 'block';
}

function hideElem() {
    this.style.display = 'none';
}
