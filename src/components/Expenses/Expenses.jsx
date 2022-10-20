import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  // 부모 컴포넌트에서 데이터를 받아와 현재 컴포넌트에서 사용할 때 (props) 받기
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
