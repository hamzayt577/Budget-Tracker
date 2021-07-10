const budgetInput = document.querySelector(".budget-input");
const submitBudgetBtn = document.querySelector(".submit-budget");
const totalBudgetParagraph = document.querySelector(".total-budget");
// expense elements
const inputExpenseAmount = document.querySelector(".expense-amount");
const inputExpenseDescription = document.querySelector(".expense-description");
const enterExpenseBtn = document.querySelector(".enter-expense");
const expenseUl = document.querySelector(".expense-list");
// income elements
const inputIncomeAmount = document.querySelector(".income-amount");
const inputIncomeDescription = document.querySelector(".income-description");
const enterIncomeBtn = document.querySelector(".enter-income");
const incomeUl = document.querySelector(".income-list");

let budget = parseFloat(budgetInput.value);
budget = 0;

submitBudgetBtn.addEventListener("click", () => {
  if (budgetInput.value === "") {
    alert("Please input your budget!");
  } else {
    budget = parseFloat(budgetInput.value);
    totalBudgetParagraph.innerHTML = `$${budget}`;
    budgetInput.value = "";
  }
});

// Expense
enterExpenseBtn.addEventListener("click", (e) => {
  if (inputExpenseAmount.value === "" && inputExpenseDescription.value === "") {
    alert("Please enter expense amount and description");
  } else if (inputExpenseAmount.value === "0") {
    alert("Expense amount cannot be 0");
  } else {
    expenseList(e);

    // Clearing the inputs
    inputExpenseAmount.value = "";
    inputExpenseDescription.value = "";

    if (budget < 0) {
      alert("You have went over budget!");
    }
  }
});

const expenseList = (e) => {
  // Create LI
  const expenseLi = document.createElement("li");
  expenseLi.innerText = `${inputExpenseDescription.value} `;
  expenseLi.classList.add("expense-list-element");
  expenseUl.appendChild(expenseLi);

  // Create Button
  const expenseDeleteBtn = document.createElement("button");
  expenseDeleteBtn.innerText = "X";
  expenseDeleteBtn.classList.add("list-button");
  expenseLi.appendChild(expenseDeleteBtn);

  // Deleting the list
  expenseDeleteBtn.addEventListener("click", () => {
    expenseDeleteBtn.parentElement.remove();
  });

  // Deducting the amount from the budget and updating the budget paragraph
  budget = budget - parseFloat(inputExpenseAmount.value);
  totalBudgetParagraph.innerText = `$${budget}`;
};

// Income
enterIncomeBtn.addEventListener("click", (e) => {
  if (inputIncomeAmount.value === "" && inputIncomeDescription.value === "") {
    alert("Please enter income amount and description");
  } else if (inputIncomeAmount.value === "0") {
    alert("Expense amount cannot be 0");
  } else {
    incomeList(e);

    // Clearing the inputs
    inputIncomeAmount.value = "";
    inputIncomeDescription.value = "";
  }
});

const incomeList = (e) => {
  // Create LI
  const incomeLi = document.createElement("li");
  incomeLi.innerText = `${inputIncomeDescription.value} `;
  incomeLi.classList.add("income-list-element");
  incomeUl.appendChild(incomeLi);

  // Create Button
  const incomeDeleteBtn = document.createElement("button");
  incomeDeleteBtn.innerText = "X";
  incomeDeleteBtn.classList.add("list-button");
  incomeLi.appendChild(incomeDeleteBtn);

  // Deleting the list
  incomeDeleteBtn.addEventListener("click", () => {
    incomeDeleteBtn.parentElement.remove();
  });

  // Adding the income to the budget
  budget = parseFloat(inputIncomeAmount.value) + budget;
  totalBudgetParagraph.innerText = `$${budget}`;
};

// Init function
const init = () => {
  console.log("Application has started!");
  totalBudgetParagraph.innerHTML = `$0`;
};

init();
