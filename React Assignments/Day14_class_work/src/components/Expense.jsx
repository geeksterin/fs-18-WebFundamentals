import React from "react";

export default function Expense({ name, amount, deleteExpense, index }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <p>{name}</p>
      <p>{amount}</p>
      <button onClick={() => deleteExpense(index)}>delete</button>
    </div>
  );
}
