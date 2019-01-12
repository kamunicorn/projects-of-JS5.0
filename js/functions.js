"use strict";

function functions() {
	
	function addZero(digit) {
	    return (digit < 10) ? '0' + digit : '' + digit;
	}

	function removeNotLetters(str) {
	    return str.replace(/[^a-zа-я]/gi, '');
	}

	function removeNotDigits(str) {
	    return str.replace(/[\D]/gi, '');
	}

	function verifyTelephone(str) {
		let s = removeNotDigits(str);
		return (s == '') ? '' : '+' + s;
	}
}

module.exports = functions;