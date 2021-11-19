import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");

  const [saveChange, setSave] = useState("data-save-none");

  const titleChangeHandler = (event) => setTitleChange(event.target.value);

  const amountChangeHandler = (event) => setAmountChange(event.target.value);

  const DateChangeHandler = (event) => setDateChange(event.target.value);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: titleChange,
      amount: amountChange,
      date: new Date(dateChange),
    };
    setTitleChange("");
    setAmountChange("");
    setDateChange("");
    props.onSaveExpenseDate(ExpenseData);
    setSave("data-save");
    setTimeout(() => setSave("data-save-none"), 2000);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={titleChange}
            onChange={titleChangeHandler}
            required
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={amountChange}
            min="0.1"
            step="0.01"
            onChange={amountChangeHandler}
            required
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={dateChange}
            min="2019-12-1"
            max="2022-12-1"
            onChange={DateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
          <p className={saveChange}>Data Saved SuccessFully!!!</p>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
