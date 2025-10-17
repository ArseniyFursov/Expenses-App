const expenses = [];
let sum = 0;
const currents = 'руб.';
const status_in_limit='все хорошо';
const status_in_limit_green='limit_ok';
const status_out_of_limit='все плохо';
const status_out_of_limit_red='limit_bad';
const status_null = 'limit_null';

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const totalNode = document.querySelector('.js-total');
const stateNode = document.querySelector('.js-state');
const historyNode = document.querySelector('.js-history');
const limmitNode = document.querySelector('.limit');
const btnClearNode = document.querySelector('.js-btn-clear');

btnNode.addEventListener('click', function() {
    const expense = getExpenseFromInput();
    if (!expense) {
        return;
    }
    trackExpenses();
    clearInput();
    render(expenses);
});

btnClearNode.addEventListener('click', function() {
    clearAll();
    clearInput();
});

function calculateExpenses(expenses) {
    let sum = 0;
    expenses.forEach(el => {
        sum += el;
    })
    return sum;
};

function getExpenseFromInput() {
    if (!inputNode.value) {
        return;
    }
    return expense = parseInt(inputNode.value);
};

function clearInput() {
    inputNode.value = '';
};

function trackExpenses() {
    expenses.push(expense);
};

function render(expenses) {
    const sum = calculateExpenses(expenses);
    renderTotal(expenses);
    renderSum(sum);
    renderStatus(sum);
};

function renderTotal(expenses) {
    let expensesListHTML='';
    expenses.forEach(element => {
        expensesListHTML += `<li>${element} ${currents}</li>`;
    });
    historyNode.innerHTML=`<ol>${expensesListHTML}</ol>`;
};

function renderSum(sum) {
    totalNode.innerHTML= `<p>${sum}</p>`;
};

function renderStatus(sum) {
    if (sum <= parseInt(limmitNode.innerHTML)) {
        
        stateNode.innerHTML = status_in_limit;
        stateNode.classList.add(status_in_limit_green);
    } else {
        stateNode.innerHTML = status_out_of_limit;
        stateNode.classList.add(status_out_of_limit_red);
    }
};

function clearAll() {
    expenses.length=0;
    let sum = 0;
    totalNode.innerHTML = 'Здесь пока пусто...';
    stateNode.innerHTML = 'Здесь пока пусто...';
    historyNode.innerHTML = 'Здесь пока пусто...';
    stateNode.classList.remove(status_in_limit_green);
    stateNode.classList.remove(status_out_of_limit_red);
};