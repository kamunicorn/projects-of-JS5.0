let money, time, budgetOneDay;

let appData = {
    budget: undefined,
    timeData: undefined,
    expense: {},
    optionalExpense: [],
    income: undefined,
    savings: false
}

function getStartData() {
	money = +prompt('Ваш бюджет на месяц?');
	time = prompt('Введите дату в формате YYYY-MM-DD');
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?');
	}
	appData.budget = money;
    appData.timeData = time;
}

function getExpense() {
	while (Object.keys(appData.expense).length < 2) {
		let key = prompt('Введите обязательную статью расходов в этом месяце'),
		value = prompt('Во сколько обойдется?');
		if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
			appData.expense[key] = +value;
		} else {
			alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
		}
	}
}

function detectDayBudget() {
	budgetOneDay = Math.round(appData.budget / 30);
	alert('Бюджет на 1 день: ' + budgetOneDay);
}

/*function detectLevel() {
	if (budgetOneDay < 300) {
		alert('Низкий уровень достатка :-(');
	} else if (budgetOneDay < 1000) {
		alert('Средний уровень достатка :-)');
	} else if (budgetOneDay >= 1000) {
		alert('Высокий уровень достатка ^_^');
	} else {
		alert('Неопознанный уровень достатка О_о')
	}
}*/

function detectLevel() {
	switch (budgetOneDay) {
		case (budgetOneDay < 300):
			alert('Низкий уровень достатка :-(');
			break;
		case (budgetOneDay < 1000):
			alert('Средний уровень достатка :-)');
			break;
		case 1000: 
		case (budgetOneDay > 1000):
			alert('Высокий уровень достатка ^_^');
			break;
		default:
			alert('Неопознанный уровень достатка О_о')
			break;
	}
}

function chooseOptExpenses() {
	let i = 0;
	while (i < 3) {
		answer = prompt('Статья необязательных расходов?');
		if (answer != null && answer != '' && !isFinite(answer)) {
			appData.optionalExpense[i] = answer;
			i++;
		} else {
			alert('Введено неверное значение: "' + answer + '"');
		}
	}
}

getStartData();
getExpense();
detectDayBudget();
detectLevel();
chooseOptExpenses();

console.log(appData);


/*for (let i = 0; i < 2; i++) {
	let key = prompt('Введите обязательную статью расходов в этом месяце'),
	value = prompt('Во сколько обойдется?');
		// Если строка (value) не является в точности числом, то результат перевода в число будет NaN
		// Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity
	if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
		appData.expense[key] = value;
	} else {
		alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
	}
}*/
/*do {
	let key = prompt('Введите обязательную статью расходов в этом месяце'),
	value = prompt('Во сколько обойдется?');
	if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
		appData.expense[key] = value;
	} else {
		alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
	}
} while (Object.keys(appData.expense).length < 2)*/