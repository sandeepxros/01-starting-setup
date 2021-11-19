import React from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onYearChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.filter} onChange={yearChangeHandler}>
          <option value={"true"}>All</option>
          {props.year.map((year) => (
            <option key={props.year.indexOf(year)} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
