import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // 부모 컴포넌트에서 데이터를 받아와 현재 컴포넌트에서 사용할 때 (props) 받기

  const [filteredYear, setFilteredYear] = useState("2020");
  // 선택한 filterYear 값을 상태관리
  const saveSelectFilterData = (selectedYear) => {
    // 매개변수로 selectedYear을 받아와서
    setFilteredYear(selectedYear);
    // 업데이트 할 상태에 selectedYear을 넣어줌
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // filtered 된 data를 가져올 때 기존의 expenses data가 변화하면 안되기 때문에 새로운 변수를 만든다.
  // props.items.date 은 객체이므로 year만 받아오기 위해 getFullYear 함수를 사용하고,
  // 받아온 year 객체를 string으로 변환시키기 위해 toString 함수를 사용한다. (filteredYear 은 string 임)

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectFilter={saveSelectFilterData}
          // onSelectFilter로 props를 내려주고 saveSelectFilterData 함수 실행 => 자식으로부터 가져온 값을 selectedYear(매개변수로)보내줌
          selected={filteredYear}
        />
        {/* props로 받아온 데이터 item을 props.item[]으로 ExpenseItem 컴포넌트에서 사용할 수 있도록 .title/amount/date 로 넘겨줌 */}

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
