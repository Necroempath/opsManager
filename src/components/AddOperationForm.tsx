import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { OperationType } from "../Models/Operation";
import type { AppDispatch, RootState } from "../store";
import { addOperation } from "../store/operationSlice";

interface AddOperationFormProps {
  type: OperationType;
}

const AddOperationForm: React.FC<AddOperationFormProps> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0]?.id || "");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [errors, setErrors] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const validate = () => {
    const newErrors = { title: "", amount: "", date: "" };

    if (title.trim().length < 1) newErrors.title = "Title can not be empty";

    if (!amount || Number(amount) <= 0)
      newErrors.amount = "Amount must be positive";

    const inputDate = new Date(date);
    const now = new Date();
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(now.getFullYear() - 10);

    if (inputDate > now || inputDate < tenYearsAgo)
      newErrors.date = "Date must be within last 10 years";

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(
      addOperation({
        type,
        title,
        amount: Number(amount),
        date,
        categoryId,
      })
    );

    setTitle("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategoryId(categories[0]?.id || "");
    setErrors({ title: "", amount: "", date: "" });
  };

   return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md rounded-md border m-auto mt-10 border-gray-300 bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-lg font-medium text-gray-800">
        Add {type === 'income' ? 'Income' : 'Expense'}
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full rounded-md border px-3 py-2 text-md focus:outline-none focus:ring-2 ${
            errors.title
              ? 'border-red-400 focus:ring-red-300'
              : 'border-gray-300 focus:ring-green-400'
          }`}
        />
        {errors.title && (
          <p className="mt-1 text-md text-red-500">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`w-full rounded-md border px-3 py-2 text-md focus:outline-none focus:ring-2 ${
            errors.amount
              ? 'border-red-400 focus:ring-red-300'
              : 'border-gray-300 focus:ring-green-400'
          }`}
        />
        {errors.amount && (
          <p className="mt-1 text-md text-red-500">{errors.amount}</p>
        )}
      </div>

      <div className="mb-6">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full rounded-md border px-3 py-2 text-md focus:outline-none focus:ring-2 ${
            errors.date
              ? 'border-red-400 focus:ring-red-300'
              : 'border-gray-300 focus:ring-green-400'
          }`}
        />
        {errors.date && (
          <p className="mt-1 text-md text-red-500">{errors.date}</p>
        )}
      </div>

      <button
        type="submit"
        className={`w-full rounded-md px-4 py-2 text-md font-medium cursor-pointer text-white transition-colors ${
          type === 'income'
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        Add {type === 'income' ? 'Income' : 'Expense'}
      </button>
    </form>
  );
};

export default AddOperationForm;
