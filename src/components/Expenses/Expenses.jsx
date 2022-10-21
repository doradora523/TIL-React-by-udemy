import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectFilter={saveSelectFilterData}
          // onSelectFilter로 props를 내려주고 saveSelectFilterData 함수 실행 => 자식으로부터 가져온 값을 selectedYear(매개변수로)보내줌
          selected={filteredYear}
        />
        {/* props로 받아온 데이터 item을 props.item[]으로 ExpenseItem 컴포넌트에서 사용할 수 있도록 .title/amount/date 로 넘겨줌 */}
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
