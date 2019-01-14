"use strict";

document.addEventListener('DOMContentLoaded', () => {

        // проверка инпутов для телефона и имени

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

    
        // Submit form

    let mainForms = document.querySelectorAll('.main_form'),
        popup = document.querySelector('.popup .form'),
        popupEngineer = document.querySelector('.popup_engineer .form');
        
    mainForms.forEach( (form) => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitForm.call(this);
        });
    });
	
    popup.addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm.call(this);
    });
    popupEngineer.addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm.call(this);
    });

});

let statusMessage = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так.'
};

    // отправляет данные в json, атрибут data - необязателен (данные, которые надо отправить дополнительно к данным с формы)
function submitForm(data) {
    let formInputs = this.querySelectorAll('input'),
        statusBox = document.createElement('div');

    statusBox.classList.add('status');
    this.appendChild(statusBox);
    let formData = new FormData(this);

         // append JSON Object to FormData
    if (data) {
        for (let key in data) {
            formData.append(key, data[key]);
        }
    }
        // Преобразование данных в json
    /*    // FormData To JSON Object
    let jsonToSend = (data) ? data : {};
    for (const [key, value]  of formData.entries()) {
        jsonToSend[key] = value;
    }
        // append FormData to JSON Object
    if (data) {
        for (let key in data) {
            jsonToSend[key] = data[key];
        }
    }
    let formData2 = JSON.stringify(jsonToSend);
    console.warn('jsonToSend : formData -> JSON , append data from JSON');
    console.log(jsonToSend);
    console.warn('formData2 = JSON.stringify(jsonToSend) : formData -> JSON , append data from JSON');
    console.log(formData2);
    formData = formData2; */
    
    function postData(data) {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            
            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    // resolve();
                    statusBox.innerHTML = statusMessage.loading;
                } else if (request.readyState === 4 && request.status === 200) {
                    resolve();
                } else {
                    reject();
                }
            };

            request.send(data);

        });
    }	// End postData

    postData(formData)
            // .then(() => statusBox.innerHTML = statusMessage.loading)
            .then(() => statusBox.innerHTML = statusMessage.success)
            .catch(() => statusBox.innerHTML = statusMessage.failure);
    
    formInputs.forEach( (input) => input.value = '' );
    setTimeout(() => statusBox.remove(), 3000);
}