import React from "react";
import ExpenseItem from "./ExpenseItem";

const style={
  color: "white",
  textAlign: "center"
}

function ElementMapping(props) {
  const DeleteHandler = (id)=> props.onDeleteAction(id);
  const element = props.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        id={expense.id}
        onDelete ={DeleteHandler}
      />
    );
  });



  return <>{   (element.length>0)?element: <h1 style={style}>No Items Found.!!!</h1>}</>;
}
export default ElementMapping;

