const budgetInput = document.querySelector(".budget-input");
const submitBudgetBtn = document.querySelector(".submit-budget");
const totalBudgetParagraph = document.querySelector(".total-budget");
// expense elements
const inputExpenseAmount = document.querySelector(".expense-amount");
const inputExpenseDescription = document.querySelector(".expense-description");
const enterExpenseBtn = document.querySelector(".enter-expense");
// income elements
const inputIncomeAmount = document.querySelector(".income-amount");
const inputIncomeDescription = document.querySelector(".income-description");
const enterIncomeBtn = document.querySelector(".enter-income");

let budget = parseFloat(budgetInput.value);

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
enterExpenseBtn.addEventListener("click", () => {
  if (inputExpenseAmount.value === "" && inputExpenseDescription.value === "") {
    alert("Please enter expense amount and description");
  } else if (inputExpenseAmount.value === "0") {
    alert("Expense amount cannot be 0");
  } else {
    // WILL IMPLEMENT THIS LATER
  }
});

// Income
enterIncomeBtn.addEventListener("click", () => {
  if (inputIncomeAmount.value === "" && inputIncomeDescription.value === "") {
    alert("Please enter income amount and description");
  } else if (inputIncomeAmount.value === "0") {
    alert("Expense amount cannot be 0");
  } else {
    // WILL IMPLEMENT THIS LATER
  }
});

// Init function
const init = () => {
  console.log("Application has started!");
  totalBudgetParagraph.innerHTML = `$0`;
};

init();
