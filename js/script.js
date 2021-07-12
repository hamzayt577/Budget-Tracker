import * as vars from "./vars.js";
let budget = parseFloat(vars.budgetInput.value);
budget = 0;

vars.submitBudgetBtn.addEventListener("click", () => {
  if (vars.budgetInput.value === "") {
    alert("Please input your budget!");
  } else {
    budget = parseFloat(vars.budgetInput.value);
    vars.totalBudgetParagraph.innerHTML = `$${budget}`;
    vars.budgetInput.value = "";
  }
});

// Expense
vars.enterExpenseBtn.addEventListener("click", (e) => {
  if (
    vars.inputExpenseAmount.value === "" &&
    vars.inputExpenseDescription.value === ""
  ) {
    alert("Please enter expense amount and description");
  } else if (vars.inputExpenseAmount.value === "0") {
    alert("Expense amount cannot be 0");
  } else {
    expenseList(e);

    // Clearing the inputs
    vars.inputExpenseAmount.value = "";
    vars.inputExpenseDescription.value = "";

    if (budget < 0) {
      alert("You have went over budget!");
    }
  }
});

const expenseList = (e) => {
  // Create LI
  const expenseLi = document.createElement("li");
  expenseLi.innerText = `${vars.inputExpenseDescription.value} $${vars.inputExpenseAmount.value} `;
  expenseLi.classList.add("expense-list-element");
  vars.expenseUl.appendChild(expenseLi);

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
  budget = budget - parseFloat(vars.inputExpenseAmount.value);
  vars.totalBudgetParagraph.innerText = `$${budget}`;
};

// Income
vars.enterIncomeBtn.addEventListener("click", (e) => {
  if (
    vars.inputIncomeAmount.value === "" &&
    vars.inputIncomeDescription.value === ""
  ) {
    alert("Please enter income amount and description");
  } else if (vars.inputIncomeAmount.value === "0") {
    alert("Expense amount cannot be 0");
  } else {
    incomeList(e);

    // Clearing the inputs
    vars.inputIncomeAmount.value = "";
    vars.inputIncomeDescription.value = "";
  }
});

const incomeList = (e) => {
  // Create LI
  const incomeLi = document.createElement("li");
  incomeLi.innerText = `${vars.inputIncomeDescription.value} $${vars.inputIncomeAmount.value} `;
  incomeLi.classList.add("income-list-element");
  vars.incomeUl.appendChild(incomeLi);

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
  budget = parseFloat(vars.inputIncomeAmount.value) + budget;
  vars.totalBudgetParagraph.innerText = `$${budget}`;
};

// Init function
const init = () => {
  console.log("Application has started!");
  vars.totalBudgetParagraph.innerHTML = `$0`;
};

init();
