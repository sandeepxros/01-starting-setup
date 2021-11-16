// function ExpenseItem(){
//     return <div>Hello World</div>
// }

import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const ExpenseItem = ({title,date,amount}) => {
    return(
        <Card className="expense-item">
        <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2 className="expense-item">{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem