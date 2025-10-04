const expenses = [];

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const totalNode = document.querySelector('.js-total');
const stateNode = document.querySelector('.js-state');
const historyNode = document.querySelector('.js-history');
const limmitNode = document.querySelector('.limit');

btnNode.addEventListener('click', function() {
    if (!inputNode.value) {
        return
    }
    const expense = parseInt(inputNode.value);
    expenses.push(expense);
    inputNode.value = '';
    let sum = 0;
    let expensesListHTML='';
    expenses.forEach(element => {
        sum += element;

        expensesListHTML += `<li>${element}</li>`;
    });
    historyNode.innerHTML=`<ol>${expensesListHTML}</ol>`;
    totalNode.innerHTML= `<p>${sum}</p>`;
    if (sum <= parseInt(limmitNode.innerHTML)) {
        stateNode.innerHTML = `<p style="color:rgba(3, 145, 0, 1);">Все хорошо</p>`;
    } else {
        stateNode.innerHTML = `<p style="color:rgba(252, 0, 0, 1);">Все плохо</p>`;
    }
});