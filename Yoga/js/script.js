'use strict';

window.addEventListener('DOMContentLoaded', function() {

		// tabs switching

	let headerOfTabs = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		sourceOfClick;

	descriptionBtn.forEach(function(btn) {
		btn.addEventListener('click', function() {
			sourceOfClick = this;
			showModal.call(this);
		});
	});

	hideTabContent(1);

	headerOfTabs.addEventListener('click', function(event) {
		let target = event.target;

		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; tabs.length; i++) {
				if (target == tabs[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	function hideTabContent(n) {
		for (let i = n; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	function showTabContent(n) {
		if (tabContent[n].classList.contains('hide')) {
			tabContent[n].classList.remove('hide');
			tabContent[n].classList.add('show');
		}
	};

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
			'total' : d,
			'seconds' : seconds,
			'minutes' : minutes,
			'hours' : hours
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
		sourceOfClick = this;
		showModal.call(this);
	});

	popupClose.addEventListener('click', function() {
		overlay.style.display = 'none';
		console.log(sourceOfClick);
		sourceOfClick.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	function showModal() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
});


function addZero(digit) {
    return (digit < 10) ? '0' + digit : '' + digit;
}