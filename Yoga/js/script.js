'use strict';

window.addEventListener('DOMContentLoaded', () => {

		// tabs switching

	let headerOfTabs = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		clickedButton;

	descriptionBtn.forEach(function(btn) {
		btn.addEventListener('click', function() {
			clickedButton = this;
			showModal.call(this);
		});
	});

	showTabContent(0);

	headerOfTabs.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (target == tabs[i] && tabContent[i].classList.contains('hide')) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	function showTabContent(n) {
		for (let i = 0; i < tabContent.length; i++) {
			if (i == n) {
				tabContent[n].classList.add('show');
				tabContent[n].classList.remove('hide');
			} else {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');	
			}
		}
	}

		// countdown timer

	let deadline = '2019-01-01 00:00:00';

	function getTimeDifference(endtime) {
		let d = Date.parse(endtime) - Date.parse(new Date());
		if (d <= 0) {
			return {
				'total' : d,
				'seconds' : 0,
				'minutes' : 0,
				'hours' : 0
			};
		}
		let	seconds = Math.floor( (d/1000) % 60 ),
			minutes = Math.floor( (d/1000/60) % 60 ),
			hours = Math.floor( d / 1000/60/60 );
		
		return {
			total: d,
			seconds: seconds,
			minutes: minutes,
			hours: hours
		};
	}

	function setClock(id, endtime) {
		let timerBox = document.getElementById(id),
			hoursBox = timerBox.querySelector('.hours'),
			minutesBox = timerBox.querySelector('.minutes'),
			secondsBox = timerBox.querySelector('.seconds');

		function updateClock() {
			let d = getTimeDifference(endtime);
			hoursBox.textContent = addZero(d.hours);
			minutesBox.textContent = addZero(d.minutes);
			secondsBox.textContent = addZero(d.seconds);
		}

		setTimeout(function recurse() {
			updateClock();
			setTimeout(recurse, 1000);
		});
	}

	setClock('timer', deadline);

		// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		popupClose = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		clickedButton = this;
		showModal.call(this);
	});

	popupClose.addEventListener('click', () => {
		overlay.style.display = 'none';
		clickedButton.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	function showModal() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

		// Photo slider

	let photoBlock = document.getElementById('photo'),
		sliderItems = photoBlock.querySelectorAll('.slider-item'),
		photoPrev = photoBlock.querySelector('.prev'),
		photoNext = photoBlock.querySelector('.next'),
		sliderDotsBlock = photoBlock.querySelector('.slider-dots'),
		sliderDotsItems = sliderDotsBlock.querySelectorAll('.dot'),
		wantedSlide = 0;

	showSliderItems(0);

	photoNext.addEventListener('click', () => {
		let lastSlide = wantedSlide;
		wantedSlide = (wantedSlide >= 3) ? 0 : wantedSlide + 1;
		showSliderItems(wantedSlide);
		resetDotActive(lastSlide, wantedSlide);
	});

	photoPrev.addEventListener('click', () => {
		let lastSlide = wantedSlide;
		wantedSlide = (wantedSlide <= 0) ? 3 : wantedSlide - 1;
		showSliderItems(wantedSlide);
		resetDotActive(lastSlide, wantedSlide);
	});

	sliderDotsBlock.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.classList.contains('dot') && !target.classList.contains('dot-active')) {
			let lastSlide = wantedSlide;
			for (let i = 0; i < sliderDotsItems.length; i++) {
				if (target == sliderDotsItems[i]) {
					wantedSlide = i;
					break;
				}
			}
			showSliderItems(wantedSlide);
			resetDotActive(lastSlide, wantedSlide);
		}
	});

	function showSliderItems(n) {
		for (let i = 0; i < sliderItems.length; i++) {
			if (i == n) {
				sliderItems[n].classList.add('show');
				sliderItems[n].classList.remove('hide');
			} else {
				sliderItems[i].classList.remove('show');
				sliderItems[i].classList.add('hide');	
			}
		}
	}

	function resetDotActive(last, current) {
		sliderDotsItems[last].classList.remove('dot-active');
		sliderDotsItems[current].classList.add('dot-active');
	}

		// Calculator

	let calcBlock = document.getElementById('price'),
		people = calcBlock.getElementsByClassName('counter-block-input')[0],
		days = calcBlock.getElementsByClassName('counter-block-input')[1],
		base = document.getElementById('select'),
		totalBox = document.getElementById('total'),
		
		calcObj = {
			days: null,
			people: null,
			baseIndex: base.selectedIndex,
			baseRate: +base.value,
			pricePerDay: 2500,
			total: null,

			calculateTotal: function() {
				if (this.days != null && this.people != null) {
					this.total = this.days * this.people * this.baseRate * this.pricePerDay;
				} else {
					this.total = null;
				}
				/*console.log(this);
				console.log('total = ' + this.total);*/
			}
		};

	totalBox.textContent = 0;

	base.addEventListener('change', (e) => {
		let target = e.target;

		calcObj.baseRate = +target.value;
		calcObj.baseIndex = target.selectedIndex;
		setTotalCost();
	});

	days.addEventListener('input', function() {
		getAndSetProperty.call(this, 'days');
	});

	people.addEventListener('input', function() {
		getAndSetProperty.call(this, 'people');
	});

	function setTotalCost() {
		calcObj.calculateTotal();
		if (calcObj.total != null) {
			totalBox.textContent = calcObj.total.toLocaleString();
		} else {
			totalBox.textContent = 0;
		}
	}

	function getAndSetProperty(property) {
		let value = this.value;

		if (value.length > 0) {
			if (!isContainOnlyDigits(value)) {
				value = removeNotDigits(value);
			}
			value = +value;	
		}
		if (value == null || value == '' || value == 0) {
			calcObj[property] = null;
			this.value = '';
		} else {
			this.value = value;
			calcObj[property] = value;
		}
		setTotalCost();
	}

		// Main form submit
	let statusMessage = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так.'
	};

	let statusBox = document.createElement('div'),
		mainForm = document.querySelector('.main-form'),
		contactForm = document.querySelector('#contacts form');

	statusBox.classList.add('status');

	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		submitForm(this);
	});

	mainForm.addEventListener('submit', function(e) {
		e.preventDefault();
		submitForm(this);
	});

	function submitForm(form) {
		let formInputs = form.querySelectorAll('input');
		form.appendChild(statusBox);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		let formData = new FormData(form);
		request.send(formData);

		request.addEventListener('readystatechange', function() {
			if (request.readyState < 4) {
				statusBox.innerHTML = statusMessage.loading;
			} else if (request.readyState === 4 && request.status === 200) {
				statusBox.innerHTML = statusMessage.success;
			} else {
				statusBox.innerHTML = statusMessage.failure;
			}
		});

		formInputs.forEach(function(input) {
			input.value = '';
		});
	}

		// verify and reset telephone str

	let phoneInputs = document.querySelectorAll('input[type=tel]')
	// console.log(phoneInputs);

	phoneInputs.forEach(function(input) {
		input.addEventListener('input', function() {
			// console.log(this);
			this.value = verifyTelephone(this.value);
		});
	});
	

});

function addZero(digit) {
    return (digit < 10) ? '0' + digit : '' + digit;
}

function isContainOnlyDigits(str) {  // проверка строки на содержание в ней только цифр
    if (isEmpty(str)) {
        return false;
    }
    return !/[\D]/gi.test(str);   
}

function removeNotDigits(str) {
    return str.replace(/[\D]/gi, '');
}

function isEmpty(str) { // не пропускаем пустые строки
    return (str == null || str == '');
}

function verifyTelephone(str) {
	let s = removeNotDigits(str);
	return (s == '') ? '' : '+' + s;
}