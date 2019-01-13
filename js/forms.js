"use strict";

document.addEventListener('DOMContentLoaded', () => {

        // проверка полей всех форм на странице

    let inputs = document.querySelectorAll('input');
    // console.log(inputs);
    inputs.forEach( (inp) => {
        if (inp.name == 'user_phone') {
            inp.addEventListener('input', function() {
                this.value = verifyTelephone(this.value);
            });
        }
        if (inp.name == 'user_name') {
            inp.addEventListener('input', function() {
                this.value = removeNotLetters(this.value);
            });
        }
        if (inp.id == 'height') {
            inp.addEventListener('input', function() {
                this.value = removeNotDigits(this.value);
            });
        }
        if (inp.id == 'weight') {
            inp.addEventListener('input', function() {
                this.value = removeNotDigits(this.value);
            });
        }
    });

/*     let phoneInputs = document.querySelectorAll('input[name=user_phone]'),
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
    }); */

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