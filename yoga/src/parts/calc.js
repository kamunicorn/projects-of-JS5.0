"use strict";

function calc() {
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
				if (this.days == 0 || this.people == 0 || this.days == null || this.people == null) {
					this.total = 0;
				} else {
					this.total = (this.days + this.people) * this.baseRate * this.pricePerDay;
				}
				/*if (this.days != null && this.people != null) {
					this.total = this.days * this.people * this.baseRate * this.pricePerDay;
				} else {
					this.total = null;
				}*/
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
		if (calcObj.total == null || calcObj.total == 0) {
			totalBox.textContent = 0;
		} else {
			totalBox.textContent = calcObj.total.toLocaleString();
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
			calcObj[property] = 0;
			this.value = '';
		} else {
			this.value = value;
			calcObj[property] = value;
		}
		setTotalCost();
	}
}

module.exports = calc;