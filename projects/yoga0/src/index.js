/*jshint esversion: 6 */
// 'use strict';

/* let functions = require('./parts/functions.js');
functions(); */

window.addEventListener('DOMContentLoaded', function() {

	let calc = require('./parts/calc.js'),
		form = require('./parts/forms.js'),
		modal = require('./parts/modal.js'),
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