import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { addCategory } from "../store/categorySlice";


const AddCategoryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
 
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const dispatch = useDispatch();
  const submit = () => {
    const trimmed = name.trim();

    if (!trimmed) {
      setError("Category name can not be empty");
      return;
    }

    const categoriesName = categories.map((c) => c.name.toLowerCase());

    if (categoriesName.includes(trimmed.toLowerCase())) {
      setError("Category already exists");
      return;
    }

    dispatch(addCategory({ name, builtin: false }));
    setName("");
    setError("");
  };

  return (
    <div className="mb-6">
      <div className="flex gap-3">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Category name"
          className={`w-full rounded-md border px-3 py-2 text-md focus:outline-none focus:ring-2 ${
            error
              ? "border-red-400 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        <button
          onClick={submit}
          className="rounded-md bg-blue-600 px-4 py-2 text-md font-medium text-white transition-colors hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AddCategoryForm;
