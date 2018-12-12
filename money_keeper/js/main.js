<<<<<<< HEAD
"use strict"; //
=======
"use strict";
>>>>>>> 0bd37fe27926df6fced880614799b6e7de977543

let expensesInps = document.getElementsByClassName('expenses-item'),
    optExpensesInps = document.querySelectorAll('.optionalexpenses-item'),
    incomeInp = document.querySelector('#income'),
    savingsChekbox = document.querySelector('#savings'),
    savingsSumInp = document.querySelector('#sum'),
    savingsPercentInp = document.querySelector('#percent'),

        // Получение кнопок
    expensesBtn = document.getElementsByTagName('button')[0],   // Кнопка Утвердить обязательные расходы
    optExpensesBtn = document.getElementsByTagName('button')[1],    // Кнопка Утвердить необязательные расходы
    countBudgetBtn = document.getElementsByTagName('button')[2],    // Кнопка Рассчитать (дневной бюджет)
    startBtn = document.getElementById('start'),    // Кнопка Начать расчет

        // Указанная дата - год, месяц, день (внизу справа)
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

        // Получение дивов, в которые выводятся результаты подсчетов
    budgetResult = document.getElementsByClassName('budget-value')[0],
    dayBudgetResult = document.getElementsByClassName('daybudget-value')[0],
    levelResult = document.getElementsByClassName('level-value')[0],
    expensesResult = document.getElementsByClassName('expenses-value')[0],
    optExpensesResult = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeResult = document.getElementsByClassName('income-value')[0],
    monthSavingsResult = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsResult = document.getElementsByClassName('yearsavings-value')[0],

    // allDataButtons = document.querySelectorAll('.data button'),
    allDataInputs = document.querySelectorAll('.data input');
    
    // Наш главный глобальный объект
let appData = {
    budget: undefined,
    timeData: undefined,
    expenses: {},
    optExpense: {},
    income: [],
    savings: false,
    savingsSum: undefined,
    savingsPercent: undefined,

    countSavings: function() {
        if (appData.savings) {
            appData.monthIncome = appData.savingsSum/100/12 * appData.savingsPercent;
            appData.yearIncome = appData.savingsSum/100 * appData.savingsPercent;
        } else {
            console.log('Произошла какая-то ошибка при подсчете накоплений.')
        }
    }
}
    // полнота (не)обязательных расходов, проверяется в функции verifyDataCompleteness
let expensesDataCompleteness = {},
    optExpensesDataCompleteness = {};

    /*************************************************************************
        Обработчики событий изменения на инпуты (не)обязательных расходов - навешиваются скопом в циклах */
    
    // Навесим на все инпуты для обязательных расходов событие, проверяющее их на правильную заполненность и разблокирующее кнопку записи их в объект appData
for (let i = 0; i < expensesInps.length; i++) {
    if ( i % 2 == 0 ) { // четные инпуты - название расходов
        expensesInps[i].addEventListener('input', function(event) {
            let expenseKey = event.target.value;
            if (isEmpty(expenseKey)) {
                expensesDataCompleteness[i] = false;
                // alert('Наименование (ключ) обязательных расходов не может быть пустым.');
            } else if (!isContainOnlyRussianLetters(expenseKey)) {
                // alert('Наименование (ключ = "' + expenseKey + '") обязательных расходов должен содержать только русские буквы.');
                event.target.value = expenseKey = removeNotRussianLetters(expenseKey).trim();
            }

            expensesDataCompleteness[i] = (isEmpty(expenseKey)) ? false : true;
            
            if (verifyDataCompleteness(expensesDataCompleteness, expensesInps.length)) {
                expensesBtn.removeAttribute('disabled');
            } else {
                expensesBtn.setAttribute('disabled', true);
            }
        console.log(expensesDataCompleteness);
        });
    } else {    // нечетные инпуты - значение расходов
        expensesInps[i].addEventListener('input', function() {
            let expenseValue = event.target.value;
            if (!isContainOnlyDigits(expenseValue)) {
                // alert('Цена (значение) обязательных расходов "' + expenseValue + '" должно быть числом.');
                event.target.value = expenseValue = removeNotDigits(expenseValue);
            }
            expensesDataCompleteness[i] = (isEmpty(expenseValue)) ? false : true;
            if (verifyDataCompleteness(expensesDataCompleteness, expensesInps.length)) {
                expensesBtn.removeAttribute('disabled');
            } else {
                expensesBtn.setAttribute('disabled', true);
            }
            console.log(expensesDataCompleteness);
        });
    }
}

    // Навесим на все инпуты для необязательных расходов событие, проверяющее их на правильную заполненность и разблокирующее кнопку записи их в объект appData
for (let i = 0; i < optExpensesInps.length; i++) {
    optExpensesInps[i].addEventListener('input', function(event) {
        let optExpenseKey = event.target.value;
        if (isEmpty(optExpenseKey)) {
            optExpensesDataCompleteness[i] = false;
            // alert('Наименование (ключ) обязательных расходов не может быть пустым.');
        } else if (!isContainOnlyRussianLetters(optExpenseKey)) {
            // alert('Наименование (ключ = "' + optExpenseKey + '") необязательных расходов должен содержать только русские буквы.');
            event.target.value = optExpenseKey = removeNotRussianLetters(optExpenseKey).trim();
        }
        optExpensesDataCompleteness[i] = (isEmpty(optExpenseKey)) ? false : true;

        if (verifyDataCompleteness(optExpensesDataCompleteness, optExpensesInps.length)) {
            optExpensesBtn.removeAttribute('disabled');
        } else {
            optExpensesBtn.setAttribute('disabled', true);
        }
    console.log(optExpensesDataCompleteness);
    });
}


    /*************************************************************************
        Обработчики событий на кнопки, инпуты - навешиваются по отдельности */

document.addEventListener('DOMContentLoaded', function() {
    allDataInputs.forEach(function(inp) {
        inp.setAttribute('disabled', true);
    });

    expensesBtn.setAttribute('disabled', true);
    optExpensesBtn.setAttribute('disabled', true);
    countBudgetBtn.setAttribute('disabled', true);
});

    /* Кнопка Начать расчет: Получение значений бюджета (общий), строки даты, и последующая запись всего этого в поля справа */
startBtn.addEventListener('click', function() {
    let money,
        dateStr;

    while (!isNumeric(money)) {
        money = prompt('Ваш бюджет на месяц?', '');
        if (!isNumeric(money)) {
            alert('Нужно ввести число.');
        }
    }
    money = +money;
    appData.budget = money;

    while (!isDate(dateStr)) {
        dateStr = prompt('Введите дату в формате YYYY-MM-DD', '');
        if (!isDate(dateStr)) {
            alert('Нужно ввести дату в формате YYYY-MM-DD.');
        }
    }
    appData.timeData = new Date(dateStr);

    yearValue.value = appData.timeData.getFullYear();
    monthValue.value = appData.timeData.getMonth() + 1;
    dayValue.value = appData.timeData.getDate();

    budgetResult.textContent = appData.budget;

    allDataInputs.forEach(function(inp) {
        inp.removeAttribute('disabled');
        inp.value = '';
    });
    savingsSumInp.setAttribute('disabled', true);
    savingsPercentInp.setAttribute('disabled', true);
    savingsChekbox.checked = false;
    /*expensesBtn.removeAttribute('disabled');
    optExpensesBtn.removeAttribute('disabled');
    countBudgetBtn.removeAttribute('disabled');*/
});

    // Кнопка Рассчитать (дневной бюджет и уровень дохода)
countBudgetBtn.addEventListener('click', function() {
    let budgetOneDay = 
        (appData.budget == undefined) ? 'Бюджет не задан!' :
        (appData.expenses == {} || isEmpty(expensesResult.textContent)) ? 'Не заданы обязательные расходы!' :
        Math.round((appData.budget - expensesResult.textContent) / 30);

    dayBudgetResult.textContent = budgetOneDay;

    levelResult.textContent = 
        (budgetOneDay < 500) ? 'Низкий уровень достатка :-(':
        (budgetOneDay < 1500) ? 'Средний уровень достатка :-)':
        (budgetOneDay >= 1500) ? 'Высокий уровень достатка ^_^':
        'Бюджет не задан!';
});

    // Кнопка Утвердить (обязательные расходы)
expensesBtn.addEventListener('click', function () {
    appData.expenses = {};
    for (let i = 0; i < expensesInps.length; i+=2) {
        let expenseKey = expensesInps[i].value,
            expenseValue = expensesInps[i+1].value;
        if (isEmpty(expenseKey)) {
            alert('Наименование (ключ) обязательных расходов не может быть пустым.');
        } else if (!isContainOnlyRussianLetters(expenseKey)) {
            alert('Наименование (ключ) обязательных расходов "' + expenseKey + '" должен содержать только русские буквы.');
        } else if (!isNumeric(expenseValue)) {
            alert('Цена (значение) обязательных расходов "' + expenseValue + '" должно быть числом.');
        } else {
            appData.expenses[expenseKey] = +expenseValue;
        }
    }
    if (Object.keys(appData.expenses).length == expensesInps.length/2) {
        let expensesSum = 0;
        for (let key in appData.expenses) {
            expensesSum += appData.expenses[key];
        };
        expensesResult.textContent = expensesSum;
        countBudgetBtn.removeAttribute('disabled');
        console.log('Получены все значения обязательных расходов:');
        console.log(appData.expenses);
    } else {
        console.log('Не все значения обязательных расходов получены.');
        console.log(appData.expenses);
    }
});

    // Кнопка Утвердить (НЕобязательные расходы)
optExpensesBtn.addEventListener('click', function() {
    let i = 0;
    optExpensesResult.textContent = '';
    optExpensesInps.forEach(function(item) {
        answer = item.value;
        if (isEmpty(answer)) {
            // ничего (потому что это необязательный расход)
        } else if (!isContainOnlyRussianLetters(answer)) {
            // alert('Значение необязательных расходов должно содержать только русские буквы.');
            item.value = removeNotRussianLetters(answer, true).trim();
        }
        else {
            appData.optExpense[i] = answer;
            optExpensesResult.textContent += answer + ' ';
            i++;
        }
    });
    if (isEmpty(optExpensesResult.textContent)) {
        optExpensesResult.textContent = '—';
    }
});

    // Инпут - статьи возможного дохода
incomeInp.addEventListener('input', function() {
    // appData.income = [];
    let items = incomeInp.value;
    if (isEmpty(items)) {
        // ничего (потому что это необязательный доход)
        appData.income = [];
    } else if (!isContainOnlyRussianLetters(items, true)) { // не только буквы, с учетом запятой
        // alert('Строка должна состоять только из русских букв, с разделителем из запятой (пробел допускается).');
        incomeInp.value = removeNotRussianLetters(items, true).trim();
        
    } else {
        appData.income = items.split(',');
        // incomeInp.value = items.trim();
    }
    incomeResult.textContent = (appData.income.length == 0) ? '—' : appData.income.join('; ');
});

    // Щелканье по чекбоксу Есть ли накопления
savingsChekbox.addEventListener('change', function() {
    appData.savings = savingsChekbox.checked;
    if (appData.savings) {
        savingsSumInp.removeAttribute('disabled');
        savingsPercentInp.removeAttribute('disabled');
    } else {
        savingsSumInp.setAttribute('disabled', true);
        savingsPercentInp.setAttribute('disabled', true);
        appData.savingsSum = undefined;
        appData.savingsPercent = undefined;
        appData.monthIncome = undefined;
        appData.yearIncome = undefined;
    }
    savingsSumInp.value = '';
    savingsPercentInp.value = '';
});

    // Ввод значений в поле Сумма (накопления)
savingsSumInp.addEventListener('input', function() {
    let savingsSumValue = savingsSumInp.value;
    if (!isContainOnlyDigits(savingsSumValue)) {
        // alert('Должно быть введено число - сумма накоплений.');
        savingsSumInp.value = savingsSumValue = removeNotDigits(savingsSumValue);
    }
    appData.savingsSum = (!isEmpty(savingsSumValue)) ? savingsSumValue : undefined;

    if (appData.savingsPercent != undefined && appData.savingsSum != undefined) {
        appData.countSavings();
        monthSavingsResult.textContent = appData.monthIncome.toFixed(2);
        yearSavingsResult.textContent = appData.yearIncome.toFixed(2);
    }
});

    // Ввод значений в поле Процент (накопления)
savingsPercentInp.addEventListener('input', function() {
    let savingsPercentValue = savingsPercentInp.value;
    if (!isNumeric(savingsPercentValue)) {
        // alert('Должно быть введено число - процент (для накоплений).');
        savingsPercentInp.value = savingsPercentValue = removeNotDigits(savingsPercentValue);
        // savingsPercentInp.value = appData.savingsPercent;
    }
    appData.savingsPercent = (!isEmpty(savingsPercentValue)) ? savingsPercentValue : undefined;
    if (appData.savingsPercent != undefined && appData.savingsSum != undefined) {
        appData.countSavings();
        monthSavingsResult.textContent = appData.monthIncome.toFixed(2);
        yearSavingsResult.textContent = appData.yearIncome.toFixed(2);
    }
});


    /****************************************************************
        Разные вспомогательные функции */

function isNumeric(n) { // проверка является ли строка числом (числами также являются строки вида 1e1, 0x6f и подобные)
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isContainDigit(str) {  // проверка строки на содержание в ней числа
    return /\d/.test(str);
}

function isContainOnlyRussianLetters(str, comma) {  // проверка строки на содержание в ней только русских букв, пробела (и запятой)
    if (isEmpty(str)) {
        return false;
    }
    if (comma) {    // с учетом запятой (разделитель)
        return !/[^а-яА-Я ,]/i.test(str);
    } else {
        return !/[^а-яА-Я]/i.test(str); // ^ - кроме, т.е. если там не только руские буквы и пробел, то вернет true (а потом мы его инвертируем)
    }   
}

function isContainOnlyDigits(str) {  // проверка строки на содержание в ней только цифр (?и точки)
    if (isEmpty(str)) {
        return false;
    }
    return !/[\D]/gi.test(str);   
}

function removeNotDigits(str) {
    return str.replace(/[\D]/gi, '');
}

function removeNotRussianLetters(str, comma) {
    if (comma) {    // с учетом запятой (разделитель)
        return str.replace(/[^а-я, ]/gi, '');
    }
    else {
        return str.replace(/[^а-я]/gi, '');
    }
}

function isEmpty(str) { // не пропускаем пустые строки
    return (str == null || str == '');
}
    /* проверка, можно ли получить из строки дату, не проверяет на соответствие календарю. То есть, если ввели '2018-02-30', то дата будет преобразована в '2018-03-02'. Также даже короткие и большие числа могут быть преобразованы в дату, например 10, 50, 23456 и т.д. */
function isDate(str) {  
    return !((new Date(str)) == 'Invalid Date') && !isEmpty(str);
}

    /* проверяет массив из булевых знаений умножением */
function verifyDataCompleteness(arr, len) {
    let result = true;
    if (len != Object.keys(arr).length) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        result *= arr[i];
    };
    return !!result;
}