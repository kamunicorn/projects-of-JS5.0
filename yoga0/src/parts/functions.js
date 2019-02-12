function functions() {
	
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
}

module.exports = functions;