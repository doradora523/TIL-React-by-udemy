import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          // 목록의 아이템을 mapping 할 때는 항상 key를 추가해야 한다.
          // why? 새로운 아이템이 추가될 때 고유의 key값이 없다면, 모든 목록을 체크해서 업데이트해야하고
          // state를 갖고있는 아이템이라면 업데이트 되면서 상태변화가 사라질 수도 있으며 버그를 만들 수도 있기 때문
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // map은 매개변수로 함수를 취하고, 그 함수는 배열에 있는 모든 요소를 실행해서 현재 매개변수로 실행되고 있는 요소를 얻는다.
          // jsx 구문에서 동적인 구문을 실행할 때 중괄호를 사용
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
