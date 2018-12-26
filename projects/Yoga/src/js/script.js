/*jshint esversion: 6 */
// 'use strict';

let x = 1;
console.log(x);
console.log('x');

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