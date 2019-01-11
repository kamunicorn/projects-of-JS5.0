"use strict";

// countdown timer

function addZero(digit) {
	return (digit < 10) ? '0' + digit : '' + digit;
}

document.addEventListener('DOMContentLoaded', () => {

	let deadline = '2019-01-18 00:00:00';

	function getTimeDifference(endtime) {
		let d = Date.parse(endtime) - Date.parse(new Date());
		if (d <= 0) {
			return {
				'total' : d,
				'seconds' : 0,
				'minutes' : 0,
                'hours' : 0,
                'days': 0
			};
		}
		let	seconds = Math.floor( (d/1000) % 60 ),
			minutes = Math.floor( (d/1000/60) % 60 ),
            hours = Math.floor( (d / 1000/60/60 ) % 24 ), 
            days = Math.floor( d / 1000/60/60/24 );
		
		return {
			total: d,
			seconds: seconds,
			minutes: minutes,
            hours: hours,
            days: days
		};
	}

	function setClock(id, endtime) {
        let timerBox = document.getElementById(id),
            daysBox = document.getElementById('days'),
			hoursBox = document.getElementById('hours'),
			minutesBox = document.getElementById('minutes'),
			secondsBox = document.getElementById('seconds');

		function updateClock() {
            let d = getTimeDifference(endtime);
            daysBox.textContent = addZero(d.days);
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

