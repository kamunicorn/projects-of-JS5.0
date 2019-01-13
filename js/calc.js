"use strict";

    // calculator
document.addEventListener('DOMContentLoaded', () => {

    let calcOpenBtn = document.querySelectorAll('.glazing_price_btn'),
        popupCalc = document.querySelector('.popup_calc');

    calcOpenBtn.forEach( (btn) => {
        btn.addEventListener('click', () => {
            showPopup('popup_calc');
        });
    });

});

function showPopup(popupClass) {
    let popup = document.querySelector('.' + popupClass),
        close = popup.querySelector(`.${popupClass}_close`);

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
    this.style.display = 'block';
}

function hideElem() {
    this.style.display = 'none';
}