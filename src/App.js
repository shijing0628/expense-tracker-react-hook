import React, {
  useState,
  useEffect
} from "react";
import "./App.css";
import {
  Header,
  History,
  Balance,
  IncomeExpense,
  NewTransaction,
} from "./components";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);


  const submitNewTransaction = (e, inputText, inputAmount) => {
    e.preventDefault();
    setHistory([
      ...history,
      {
        transactionText: inputText,
        transactionAmount: inputAmount,
      },
    ]);
  };

  // step1: loop through history state, add all input amount
  //step 2: update balance state with amount state total
  const totalBalance = () => {
    let total = 0;
    let totalIncome = 0;
    let totalExpense = 0;
    history.forEach((item) => {
      let myBalance = parseInt(item.transactionAmount);
      total += myBalance;
      if (myBalance >= 0) {
        totalIncome += myBalance;
      } else {
        totalExpense += myBalance;
      }
    });
    setBalance(total);
    setIncome(totalIncome);
    setExpense(totalExpense);
  };

  const deleteItemHandler = (id, e) => {
    e.preventDefault();
    const deleteItem = [...history];
    deleteItem.splice(id, 1);
    console.log(deleteItem);
    setHistory(deleteItem);
  }


  useEffect(() => {
    totalBalance();
  }, [history]);

  return (
    <>
      <div className="App" >
        <Header />
        <Balance balance={balance} />
        <IncomeExpense income={income}
          expense={expense} />
        <History history={history} deleteItemHandler={deleteItemHandler} />
        <NewTransaction submitNewTransaction={
          submitNewTransaction
        } />
      </div>
    </>
  );
};

export default App;