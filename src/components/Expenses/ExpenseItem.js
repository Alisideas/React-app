import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'car Insurance';
  const expenseAmount = 294.67;

  return (
    <Card className = "expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick= {clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
