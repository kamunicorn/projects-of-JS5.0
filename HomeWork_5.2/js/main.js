let expensesInps = document.getElementsByClassName('expenses-item'),
	optionalExpensesInps = document.querySelectorAll('.optionalexpenses-item'),
	incomeInp = document.querySelector('#income'),
	savingsChekbox = document.querySelector('#savings'),
	savingsSumInp = document.querySelector('#sum'),
	savingsPercentInp = document.querySelector('#percent'),

		// Получение кнопок
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],
	startBtn = document.getElementById('start'),

	// вот этот вариант мне больше нравится, чем через тэг
	/*expensesBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	countBudgetBtn = document.querySelector('.count-budget-btn'),*/

		// Указанная дата - год, месяц, день
	yearValue = document.querySelector('.year-value');
	monthValue = document.querySelector('.month-value');
	dayValue = document.querySelector('.day-value');
	

	// массивы для автоматизации процесса получения дивов, у которых классы начинаются на значение в этом массиве и заканчиваются на '-value'
let divsForResultValues = [],
	namesOfValues = [
		'budget',
		'daybudget',
		'level',
		'expenses',
		'optionalexpenses',
		'income',
		'monthsavings',
		'yearsavings'
	];

namesOfValues.forEach( function (valueHalf) {
	divsForResultValues.push(document.getElementsByClassName(valueHalf + '-value')[0]);
});
console.log(divsForResultValues);

console.log('expensesInps');
console.log(expensesInps);
console.log('optionalExpensesInps');
console.log(optionalExpensesInps);

console.log('incomeInp');
console.log(incomeInp);
console.log('savingsChekbox');
console.log(savingsChekbox);
console.log('savingsSumInp');
console.log(savingsSumInp);
console.log('savingsPercentInp');
console.log(savingsPercentInp);

console.log('startBtn');
console.log(startBtn);
console.log('expensesBtn');
console.log(expensesBtn);
console.log('optionalExpensesBtn');
console.log(optionalExpensesBtn);
console.log('countBudgetBtn');
console.log(countBudgetBtn);

console.log('yearValue');
console.log(yearValue);
console.log('monthValue');
console.log(monthValue);
console.log('dayValue');
console.log(dayValue);