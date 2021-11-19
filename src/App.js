import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
import "./index.css";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_DATA);
  const [saveChange, setSave] = useState("data-save-none");
 // const [deleteElement, setDeleteElement] = useState("");
   

  const addExpenseHandler = expenseData =>{
    setExpense(prevExpense=>{
      return [expenseData, ...prevExpense]
    })
  }
  const removeHandler = id => {
     setExpense(expenses.filter(expense => expense.id!==id));
     setSave("data-save");
     setTimeout(() => setSave("data-save-none"), 2000);
  };

  return (<div>
    <NewExpense onAddNewExpense = {addExpenseHandler}/>
    <Expenses items={expenses} onRemove={removeHandler} />
    <p className={saveChange}>Data Deleted SuccessFully!!!</p>
  </div>)


  // React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h2",
  //     {},
  //     "Let's get started!",
  //     React.createElement(Expenses, { items: expenses })
  //   )
  // );
  
}

export default App;
