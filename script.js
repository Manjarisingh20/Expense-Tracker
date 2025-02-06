const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const categoryInput = document.getElementById('category-input');
const transactionList = document.getElementById('transaction-list');
const totalExpenseDisplay = document.getElementById('total-expense');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let totalExpense = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = expenseInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (description && !isNaN(amount)) {
        const expense = { description, amount, category };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        const li = document.createElement('li');
        li.textContent = `${description} - ${amount} - ${category}`;
        transactionList.appendChild(li);

        totalExpense += amount;
        totalExpenseDisplay.textContent = totalExpense.toFixed(2);

        expenseInput.value = '';
        amountInput.value = '';
        categoryInput.value = '';
    }
});