import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Operation } from "./Models/Operation";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { addOperation } from "./store/operationSlice";

function App() {
const dispatch = useDispatch<AppDispatch>();
  const operations = useSelector((state: RootState) => state.operations.operations);

  const handleAdd = () => {
    dispatch(addOperation({
      type: 'income',
      title: 'Freelance',
      amount: 500,
      date: new Date().toISOString(),
      categoryId: 'example-category-id',
    }));
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Operation</button>
      <ul>
        {operations.map(op => (
          <li key={op.id}>
            {op.title} - {op.amount} - {op.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
