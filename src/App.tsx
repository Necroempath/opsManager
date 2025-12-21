import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Operation } from "./Models/Operation";

function App() {
  const [count, setCount] = useState(0);
  let op = new Operation({
    type: "income",
    title: "new task",
    amount: 500,
    date: new Date().toISOString(),
    categoryId: "a",
  });

  return (
    <>
      <p>{op.amount}</p>
    </>
  );
}

export default App;
