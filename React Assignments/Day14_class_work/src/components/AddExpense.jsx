import React, { useContext, useState } from "react";
import { ExpenseContext } from "../App";

export default function AddExpense() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { addExpense } = useContext(ExpenseContext);
  return (
    <div>
      <hr />
      <h1>Add Expense</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExpense(name, amount);
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="title"
          type="text"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
          placeholder="Amount"
          type="number"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
