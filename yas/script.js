const transactionUl = document.querySelector("#transactions");
//console.log(transactionUl);

const dummyTransactions = [
  { id: 1, name: "Bolo de beijinho", amount: -20 },
  { id: 2, name: "Ferrero Rocher", amount: 300 },
  { id: 3, name: "Torta de Morango", amount: -10 },
  { id: 4, name: "Flores", amount: 150 },
];

const addTransactionIntoDOM = (transaction) => {
  const operator = transaction.amount < 0 ? "-" : "+";
  const CSSClass = transaction.amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(transaction.amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `
        ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
  `;
  // transactionUl.append(li);
  transactionUl.prepend(li);

  // console.log(li);
  //console.log(operator);

  {
    // <li class="minus">
    //     Salário <span>-$400</span><button class="delete-btn">x</button>
    // </li>
  }
};


const updateBalanceValues = () => {
  const transactionsAmounts = dummyTransactions.map(
    (transaction) => transaction.amout
  );

  const income = transactionsAmounts.filter((value) => value > 0);
  const total = transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2);
  console.log(income);
};

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
};

init();


