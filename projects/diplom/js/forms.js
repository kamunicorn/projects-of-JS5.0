"use strict";

document.addEventListener('DOMContentLoaded', () => {

        // проверка полей всех форм на странице

    let phoneInputs = document.querySelectorAll('input[name=user_phone]'),
        nameInputs = document.querySelectorAll('input[name=user_name]');
        
    phoneInputs.forEach( (inp) => {
        inp.addEventListener('input', function() {
            this.value = verifyTelephone(this.value);
        });
    });

    nameInputs.forEach( (inp) => {
        inp.addEventListener('input', function() {
            this.value = removeNotLetters(this.value);
        });
    });

    document.getElementById('height').addEventListener('input', function() {
        this.value = removeNotDigits(this.value);
    });

    document.getElementById('width').addEventListener('input', function() {
        this.value = removeNotDigits(this.value);
    });

});

function verifyTelephone(str) {
	let s = removeNotDigits(str);
	return (s == '') ? '' : '+' + s;
}

function removeNotDigits(str) {
	return str.replace(/[\D]/gi, '');
}

function removeNotLetters(str) {
    return str.replace(/[^a-zа-яё]/gi, '');
}