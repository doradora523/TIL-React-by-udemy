import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

  const selectFilterHandler = (event) => {
    // 매개변수로 event값(onChange)을 받음
    props.onSelectFilter(event.target.value);
    // props로 onSelectFilter에 value값을 보내줌
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectFilterHandler}>
          {/* value값은 props로 받은 selected 값으로 설정 */}
          {/* onChange 이벤트로 selectFliterHandler 함수 포인팅 -> 함수실행 */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
