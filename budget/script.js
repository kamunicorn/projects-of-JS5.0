"use strict";

let money = +prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expense: {},
    optionalExpense: undefined,
    income: undefined,
    savings: false
}
// console.log(appData);

/*for (let i = 0; i < 2; i++) {
	let key = prompt('Введите обязательную статью расходов в этом месяце'),
	value = prompt('Во сколько обойдется?');
		// Если строка (value) не является в точности числом, то результат будет NaN
		// Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity
	if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
		appData.expense[key] = value;
	} else {
		alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
	}
}*/

/*while (Object.keys(appData.expense).length < 2) {
	let key = prompt('Введите обязательную статью расходов в этом месяце'),
	value = prompt('Во сколько обойдется?');
	if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
		appData.expense[key] = value;
	} else {
		alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
	}
}*/
do {
	let key = prompt('Введите обязательную статью расходов в этом месяце'),
	value = prompt('Во сколько обойдется?');
	if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
		appData.expense[key] = value;
	} else {
		alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
	}
} while (Object.keys(appData.expense).length < 2)

console.log(appData.expense);
let budgetOneDay = appData.budget / 30;
alert('Бюджет на 1 день: ' + budgetOneDay);