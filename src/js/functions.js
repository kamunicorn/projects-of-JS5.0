"use strict";

function addZero(digit) {
	return (digit < 10) ? '0' + digit : '' + digit;
}

function verifyTelephone(str) {
	let s = removeNotDigits(str);
	return (s == '') ? '' : s;
}

function removeNotDigits(str) {
	return str.replace(/[\D]/gi, '');
}

function removeNotLetters(str) {
    return str.replace(/[^a-zа-яё]/gi, '');
}

function showPopup(popupClass) {
    let popup = document.querySelector('.' + popupClass),
        close = popup.querySelector(`.${popupClass}_close`);

    showElem.call(popup);
    document.body.style.overflow = 'hidden';

    close.addEventListener('click', () => {
        closePopup(popup);
    });

    popup.addEventListener('click', function(event) {
        let e = event || window.event;
        if (e.target == this) {
            closePopup(popup);
        }
    });
}

function closePopup(popup) {
    hideElem.call(popup);
    document.body.style.overflow = '';
}

function showElem() {
    this.style.display = 'block';
}

function hideElem() {
    this.style.display = 'none';
}
