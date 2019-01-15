"use strict";

    // calculator

function calc() {
let calcObj = {};
// 
document.addEventListener('DOMContentLoaded', () => {
    
    let calcOpenBtn = document.querySelectorAll('.glazing_price_btn');

    calcOpenBtn.forEach( (btn) => {
        btn.addEventListener('click', () => {
            showPopup('popup_calc');
            openCalcStart();
        });
    });

    ['popup_calc', 'popup_calc_profile', 'popup_calc_end'].forEach( (popupClass) => {
        let popup = document.querySelector('.' + popupClass),
            close = popup.querySelector(`.${popupClass}_close`);
    
        close.addEventListener('click', () => {
            calcObj = {};
        });
        popup.addEventListener('click', function(event) {
            let e = event || window.event;
            if (e.target == this) {
                calcObj = {};
            }
        });
    });    

});

function openCalcStart() {
    let calcPopup = document.querySelector('.popup_calc'),
        calcInputs = calcPopup.querySelectorAll('input.form-control'),
        buttonNext = calcPopup.getElementsByClassName('popup_calc_button')[0],

        windowTabsBox = calcPopup.querySelector('.balcon_icons'),
        prev = 0,
        windowImgs = windowTabsBox.querySelectorAll('img'),
        windowImgsBig = calcPopup.querySelectorAll('.big_img img'),
        dim = {};    // dimension - размеры балкона width, height
    
    for (let i = 0; i < windowImgs.length; i++) {
        windowImgs[i].classList.remove('do_image_more');
        windowImgsBig[i].style.display = 'none';
    }

    dim.form_window = 1;   // тип балкона (в верстке нумерация с 1)
    windowImgs[0].classList.add('do_image_more');
    windowImgsBig[0].style.display = 'inline-block';
    
    buttonNext.setAttribute('disabled', true);
    
    calcInputs.forEach( (inp) => {
        inp.value = '';

        inp.addEventListener('input', function() {
            let id = this.id,
                value = +removeNotDigits(this.value);
            
            this.value = (value == 0) ? '' : +value;
            dim[id] = (value != '' && value != 0) ? +value : undefined;
            
            if (!!dim.width && !!dim.height) {
                buttonNext.removeAttribute('disabled');
            } else {
                buttonNext.setAttribute('disabled', true);
            }
        });
    });
    
    windowTabsBox.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.tagName == 'IMG') {
            let i = +removeNotDigits(target.className) - 1;
            dim.form_window = i + 1;
            target.classList.add('do_image_more');
            windowImgs[prev].classList.remove('do_image_more');

            windowImgsBig[i].style.display = 'inline-block';
            windowImgsBig[prev].style.display = 'none';
            prev = i;
        }
    });

    buttonNext.addEventListener('click', () => {
        calcObj = dim;
        closePopup(calcPopup);
        showPopup('popup_calc_profile');
        openCalcProfile();
    });
}

function openCalcProfile() {
    let calcPopupProfile = document.querySelector('.popup_calc_profile'),
        checkCold = calcPopupProfile.querySelectorAll('input')[0],
        checkWarm = calcPopupProfile.querySelectorAll('input')[1],
        buttonNext = calcPopupProfile.getElementsByClassName('popup_calc_profile_button')[0];

    checkCold.checked = false;
    checkWarm.checked = false;
    document.getElementById('view_type').selectedIndex = 0;

    buttonNext.setAttribute('disabled', true);

    checkCold.addEventListener('click', () => {
        checkWarm.checked = !checkCold.checked;
        buttonNext.removeAttribute('disabled');
    });
    checkWarm.addEventListener('click', () => {
        checkCold.checked = !checkWarm.checked;
        buttonNext.removeAttribute('disabled');
    });

    buttonNext.addEventListener('click', () => {
        calcObj.thermal = (checkCold.checked) ? 'cold' : 
            (checkWarm.checked) ? 'warm' : 'default';
        calcObj.type = document.getElementById('view_type').value;
        closePopup(calcPopupProfile);
        showPopup('popup_calc_end');
        openCalcEnd();
    });
}

function openCalcEnd() {
    let calcPopupEnd = document.querySelector('.popup_calc_end'),
        form = calcPopupEnd.querySelector('form');
    
    form.onsubmit = function(e) {
        console.log(calcObj);
        e.preventDefault();
        submitForm.apply(this, [calcObj]);
        calcObj = {};
    };
    /* form.addEventListener('submit', function(e) {
        console.log(calcObj);
        e.preventDefault();
        submitForm.apply(this, [calcObj]);
        calcObj = {};
    }); */

}
}

module.exports = calc;