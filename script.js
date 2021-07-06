const budgetInput = document.querySelector(".budget-input");
const submitBudgetBtn = document.querySelector(".submit-budget");
const totalBudgetParagraph = document.querySelector(".total-budget");

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

// Init function
const init = () => {
  console.log("Application has started!");
  totalBudgetParagraph.innerHTML = `$0`;
};

init();
