import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // 매개변수(enteredExpenseData)를 설정하여 이 함수가 parameters를 가져오도록 한다.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const openEditingHandler = () => {
    setIsEditing(true);
  };
  const closeEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={openEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
