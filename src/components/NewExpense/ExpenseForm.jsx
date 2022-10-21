import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 독립적인 state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // multiple state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // 1.
    setEnteredTitle(event.target.value);
    // 이 접근방법은 독립적인 state를 가질 때 사용한다.

    // 2.
    // setUserInput({...userInput, enteredTitle: event.target.value });
    // 이 접근방법은 동시에 수많은 상태 업데이트를 계획한다면 오래되었거나 잘못된 스냅샷에 의존할 수도 있다.
    // ...userInput 을 앞에 호출하는 이유?
    // state를 업데이트할 때 react는 이 것을 이전의 state와 병합하지 않기 때문(updated 된 값으로 교체함)
    // 기존의 값을 잃어버리지 않도록 모든 키와 값의 쌍을 추출해서 새로운 객체에 오버라이드하는 것

    // 3.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // (prevState)안에 있는 함수에서 이 상태 스냅샷이 가장 최신 상태의 스냅샷이라는 것과 항상 계획된 상태 업데이트를 염두에 두고 있다는 것을 보장한다.
    // 이 접근방법은 항상 최신상태의 스냅샷에서 작업하도록 하는 좀 더 안전한 방법이다.
    // 따라서 이전 상태에 따라 상태를 업데이트할 때 마다 이 함수 구문을 사용해야 한다.
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // submitHandler 가 실행될 때 페이지가 reload 되지 않도록 default값을 막아줌

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // state를 초기상태로 돌리기 위해 빈 문자열로 다시 설정
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              // 입력된 값을 저장하기 위해서 useState를 사용, 변경사항을 수신
              value={enteredTitle}
              // 입력 요소들이 갖는 내부 값의 프로퍼티를 설정, 입력에 상태를 다시 보내줌
              // * 양방향 바인딩 : 폼 전송에 따라 사용자의 입력을 모으거나 변경할 수 있게 해주기에 유용함
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
