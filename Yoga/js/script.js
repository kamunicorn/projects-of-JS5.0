'use strict';

window.addEventListener('DOMContentLoaded', function() {

	let headerOfTabs = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(n) {
		for (let i = n; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTabContent(1);

	function showTabContent(n) {
		if (tabContent[n].classList.contains('hide')) {
			tabContent[n].classList.remove('hide');
			tabContent[n].classList.add('show');
		}
	};

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

		// countdown timer

	let deadline = '2019-01-01 00:00:00';
	getTimeDifference(deadline);

	function getTimeDifference(endtime) {
		let d = Date.parse(endtime) - Date.parse(new Date());
		if (d <= 0) {
			return {
			'total' : 0,
			'seconds' : 0,
			'minutes' : 0,
			'hours' : 0
		};
		}
		let	seconds = Math.floor( (d/1000) % 60 ),
			minutes = Math.floor( (d/1000/60) % 60 ),
			hours = Math.floor( d / 1000/60/60 );
		let days = Math.floor( hours / 24 );

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
});

	// Modal

let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	popupClose = document.querySelector('.popup-close');

more.addEventListener('click', function() {
	overlay.style.display = 'block';
	this.classList.add('more-splash');
	document.body.style.overflow = 'hidden';
});

popupClose.addEventListener('click', function() {
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});

function addZero(digit) {
    return (digit < 10) ? '0' + digit : '' + digit;
}