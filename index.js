const expenses = [];

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const totalNode = document.querySelector('.js-total');
const stateNode = document.querySelector('.js-state');
const historyNode = document.querySelector('.js-history');

btnNode.addEventListener('click', function() {
    if (!inputNode) {
        return
    }

    const expense = parseInt(inputNode.value);

    expenses.push(expense);

    inputNode.value = '';

    let sum = 0;

    expenses.forEach(element => {
        sum += element


    });
});