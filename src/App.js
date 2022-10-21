import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// 사용할 컴포넌트 import

const App = () => {
  // data를 변수 선언하여 배열에 담아줌 (props로 내려줄 데이터)

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.78,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 221,
      date: new Date(2021, 3, 2),
    },
    { id: "e3", title: "New TV", amount: 233.25, date: new Date(2022, 5, 12) },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2019, 7, 6),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* props로 내려줄 데이터를 컴포넌트 안에서 이름={데이터함수} 입력 */}
    </div>
  );
};

export default App;
