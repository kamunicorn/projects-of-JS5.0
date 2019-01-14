"use strict";

    // calculator

let calcObj = {};

document.addEventListener('DOMContentLoaded', () => {
    
    let calcOpenBtn = document.querySelectorAll('.glazing_price_btn');

    calcOpenBtn.forEach( (btn) => {
        btn.addEventListener('click', () => {
            showPopup('popup_calc');
            openCalcStart();
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
    
    howToCleanCalcObj('popup_calc');

    for (let i = 0; i < windowImgs.length; i++) {
        windowImgs[i].classList.remove('do_image_more');
        windowImgsBig[i].style.display = 'none';
    }

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

    howToCleanCalcObj('popup_calc_profile');

    checkCold.checked = false;
    checkWarm.checked = false;
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
        // calcObj.cold = checkCold.checked;
        // calcObj.warm = checkWarm.checked;
        calcObj.material = document.getElementById('view_type').value;
        console.log(calcObj);
        closePopup(calcPopupProfile);
        showPopup('popup_calc_end');
        openCalcProfile();
    });
}

function howToCleanCalcObj(popupClass) {
    let popup = document.querySelector('.' + popupClass),
        close = popup.querySelector(`.${popupClass}_close`);

    close.addEventListener('click', () => {
        calcObj = {};
    });
    popup.addEventListener('click', (event) => {
        let e = event || window.event;
        if (e.target == this) {
            calcObj = {};
        }
    });
}