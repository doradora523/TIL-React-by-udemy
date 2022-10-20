import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // className 을 컴포넌트 두 개이상에서 사용하고 싶을 때 변수를 선언(클래스명 두개 합성)하여 className={변수명}으로 사용
  return <div className={classes}>{props.children}</div>;
  // props.children = 예약어 /
}

export default Card;
