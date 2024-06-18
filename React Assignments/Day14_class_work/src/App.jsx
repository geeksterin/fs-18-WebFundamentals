import { createContext, useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import Expense from "./components/Expense";

export const ExpenseContext = createContext(null);
function App() {
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spent, setSpent] = useState(0);

  const [expenses, setExpenses] = useState([]);

  const addExpense = (name, amount) => {
    setExpenses([...expenses, { name, amount: parseInt(amount) }]);
  };

  const deleteExpense = (index) => {
    let temp = [...expenses];
    temp.splice(index, 1);
    setExpenses(temp);
  };

  useEffect(() => {
    // re calculate the expeses
    let amount = 0;
    for (let item of expenses) {
      amount += item.amount;
    }
    let rm = budget - amount;

    setSpent(amount);
    setRemaining(rm);
  }, [expenses]);

  return (
    <div>
      <ExpenseContext.Provider value={{ budget, spent, remaining, addExpense }}>
        <Budget />
        <AddExpense />

        {expenses.map((item, index) => (
          <Expense
            amount={item.amount}
            name={item.name}
            deleteExpense={deleteExpense}
            index={index}
          />
        ))}
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
