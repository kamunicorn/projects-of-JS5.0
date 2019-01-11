"use strict";

document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout( () => {
        showPopup();
    }, 60000);

});

function showPopup() {
    let popup = document.querySelector('.popup'),
        close = popup.querySelector('.popup_close');

    popup.style.display = "block";

    close.addEventListener('click', () => {
        popup.style.display = "none";
    });
}