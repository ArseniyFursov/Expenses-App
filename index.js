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
const btnClearNode = document.querySelector('.js-btn-clear');
const typeOfExpenseNode = document.querySelector('.js-type-expense');

// popup
const bodyFixedNode = document.querySelector('body');
const limmitNode = document.querySelector('.limit');
const inputChangeLimitNode = document.querySelector('.js-input-limit');
const btnPopupNode = document.querySelector('.js-btn-popup');
const popupNode = document.querySelector('.js-popup');
const btnChangeLimitNode = document.querySelector('.js-btn-new-limit');
const btnClosePopupNode = document.querySelector('.js-close-popup');
const popupContentNode = document.querySelector('.js-popup-content');

const popupClassOpen = 'popup-open';
const bodyClassFixed = 'body-fixed';

btnPopupNode.addEventListener('click', function() {
    popupNode.classList.add(popupClassOpen);
    bodyFixed();
});

btnChangeLimitNode.addEventListener('click', function() {
    const newLimit = getNewLimitFromInput();
    if (!newLimit) {
        return;
    }
    clearInputLimit();
    closePupup();
    bodyFixedNode.classList.remove(bodyClassFixed);
    limmitNode.innerHTML = `${newLimit} ${currents}`;
});

btnClosePopupNode.addEventListener('click', function() {
    popupNode.classList.remove(popupClassOpen);
    bodyFixedNode.classList.remove(bodyClassFixed);
});

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        popupNode.classList.remove(popupClassOpen);
        bodyFixedNode.classList.remove(bodyClassFixed);
    }
});

function bodyFixed() {
    bodyFixedNode.classList.add(bodyClassFixed);
};

function getNewLimitFromInput() {
    if (!inputChangeLimitNode.value) {
        return;
    }
    return newLimit = parseInt(inputChangeLimitNode.value);
};

function closePupup() {
    popupNode.classList.remove(popupClassOpen);
};

function clearInputLimit() {
    inputChangeLimitNode.value = '';
};

// popup

btnNode.addEventListener('click', function() {
    const expense = getExpenseFromInput();
    const typeExpense = typeOfExpense();
    const newExpense = {count:expense, type:typeExpense};
    if (!expense) {
        return;
    }
    trackExpenses(newExpense);
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
        sum += el.count;
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

function trackExpenses(newExpense) {
    expenses.push(newExpense);
};

function render(expenses) {
    sum = calculateExpenses(expenses);
    renderTotal(expenses);
    renderSum(sum);
    renderStatus(sum);
};

function renderTotal(expenses) {
    let expensesListHTML='';
    expenses.forEach(element => {
        expensesListHTML += `<li>${element.count} ${currents} - ${element.type}</li>`;
    });
    historyNode.innerHTML=`<ol>${expensesListHTML}</ol>`;
};

function renderSum(sum) {
    totalNode.innerHTML= `<p>${sum}</p>`;
};

function renderStatus(sum) {
    const stateBad = stateTheBad(sum);
    if (sum <= parseInt(limmitNode.innerHTML)) {
        
        stateNode.innerHTML = status_in_limit;
        stateNode.classList.add(status_in_limit_green);
    } else {
        stateNode.innerHTML = status_out_of_limit + ` (-${stateBad})`;
        stateNode.classList.add(status_out_of_limit_red);
    }
};

function clearAll() {
    expenses.length=0;
    sum = 0;
    totalNode.innerHTML = 'Здесь пока пусто...';
    stateNode.innerHTML = 'Здесь пока пусто...';
    historyNode.innerHTML = 'Здесь пока пусто...';
    stateNode.classList.remove(status_in_limit_green);
    stateNode.classList.remove(status_out_of_limit_red);
};

function typeOfExpense() {
    return typeExpense = typeOfExpenseNode.value;
};

function stateTheBad(sum) {
    return sum - parseInt(limmitNode.innerHTML)
};