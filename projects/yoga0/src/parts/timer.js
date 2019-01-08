/*jshint esversion: 6 */
	// countdown timer

function addZero(digit) {
	return (digit < 10) ? '0' + digit : '' + digit;
}

function timer() {

	let deadline = '2019-01-16 00:00:00';

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
}

module.exports = timer;