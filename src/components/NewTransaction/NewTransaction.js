import React, { useState } from "react";
import "./NewTransaction.scss";

function NewTransaction({ submitNewTransaction }) {
  const [transactionText, setTransactionText] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);

  const transactionTextChange = (e) => {
    //console.log(e.target.value)
    setTransactionText(e.target.value);
  };

  const transactionAmountChange = (e) => {
    // console.log(e.target.value)
    setTransactionAmount(e.target.value);
  };

  return (
    <div className="NewTransaction">
      <h3>Add new Transaction</h3>
      <div>
        <h5>Text</h5>
        <input
          type="text"
          name="newTransactionText"
          id="newTransactionText"
          onChange={transactionTextChange}
        ></input>
      </div>
      <div>
        <h5>Amount (negative - expense, positive - income</h5>
        <input
          type="text"
          name="newTransactionAmount"
          id="newTransactionAmount"
          onChange={transactionAmountChange}
        ></input>
      </div>
      <button
        type="button"
        onClick={(e) =>
          submitNewTransaction(e, transactionText, transactionAmount)
        }
      >
        Add transaction
      </button>
    </div>
  );
}

export default NewTransaction;
