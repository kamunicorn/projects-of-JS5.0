'use strict';

window.addEventListener('DOMContentLoaded', () => {

	let calc = require('./parts/calc.js'),
		form = require('./parts/forms.js'),
		modal = require('./parts/functions.js'),
		slider = require('./parts/slider.js'),
		tabs = require('./parts/tabs.js'),
		timer = require('./parts/timer.js');

	calc();
	form();
	modal();
	slider();
	tabs();
	timer();

});

let functions = require('./parts/functions.js');
functions();