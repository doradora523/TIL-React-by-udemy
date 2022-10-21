import React, { useState } from "react";
// useState = 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state로 값을 정의할 수 있게 해주는 함수
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // 해당 컴포넌트에서 받아올 데이터 props 로 받아옴

  // const [title, setTitle] = useState(props.title);
  // const [현재 설정 값, 업데이트 된 값] = useState(기본값)
  // 중첩함수에서 사용X

  // const clickHandler = () => {
  //   setTitle("updated!");
  //   // 함수를 호출하여 값을 업데이트 시킨다.
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* 넘겨줄 props */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
