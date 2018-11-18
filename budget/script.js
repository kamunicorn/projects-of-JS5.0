"use strict";

let money,
time;

money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expense: {},
    optionalExpense: undefined,
    income: undefined,
    savings: false
}
console.log(appData);

let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = + prompt('Во сколько обойдется?');
let answer3 = prompt('Введите обязательную статью расходов в этом месяце');
let answer4 = + prompt('Во сколько обойдется?');

appData.expense[answer1] = answer2;
appData.expense[answer3] = answer4;

let budgetOneDay = (appData.budget - answer2 - answer4) / 30;
alert('Бюджет на 1 день: ' + budgetOneDay);