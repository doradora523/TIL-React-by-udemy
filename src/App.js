import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// 사용할 컴포넌트 import

const App = () => {
  // data를 변수 선언하여 배열에 담아줌 (props로 내려줄 데이터)
  const expenses = [
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
      date: new Date(2022, 3, 2),
    },
    { id: "e3", title: "New TV", amount: 233.25, date: new Date(2022, 5, 12) },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2022, 7, 6),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
      {/* props로 내려줄 데이터를 컴포넌트 안에서 이름={데이터함수} 입력 */}
    </div>
  );
};

export default App;
