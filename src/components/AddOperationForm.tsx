import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { OperationType } from '../Models/Operation';
import type { AppDispatch, RootState } from '../store';
import { addOperation } from '../store/operationSlice';


interface AddOperationFormProps {
  type: OperationType;
}

const AddOperationForm: React.FC<AddOperationFormProps> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.categories);

  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const [errors, setErrors] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const validate = () => {
    const newErrors = { title: '', amount: '', date: '' };

    if (title.trim().length < 1) newErrors.title = 'Title can not be empty';

    if (!amount || Number(amount) <= 0) newErrors.amount = 'Amount must be positive';

    const inputDate = new Date(date);
    const now = new Date();
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(now.getFullYear() - 10);

    if (inputDate > now || inputDate < tenYearsAgo) newErrors.date = 'Date must be within last 10 years';
    
    setErrors(newErrors);
    return Object.values(newErrors).every(e => !e);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(addOperation({
      type,
      title,
      amount: Number(amount),
      date,
      categoryId,
    }));

    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
    setCategoryId(categories[0]?.id || '');
    setErrors({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md w-80">

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 ${
            errors.title ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-primary'
          }`}
        />
        {errors.title && <span className="text-red-400 text-sm mt-1">{errors.title}</span>}
      </div>


      <select
        value={categoryId}
        onChange={e => setCategoryId(e.target.value)}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <div className="flex flex-col">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 ${
            errors.amount ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-primary'
          }`}
        />
        {errors.amount && <span className="text-red-400 text-sm mt-1">{errors.amount}</span>}
      </div>

      <div className="flex flex-col">
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 ${
            errors.date ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-primary'
          }`}
        />
        {errors.date && <span className="text-red-400 text-sm mt-1">{errors.date}</span>}
      </div>

      <button
        type="submit"
        className={`p-2 rounded text-white ${
          type === 'income' ? 'bg-income hover:bg-green-500' : 'bg-expense hover:bg-red-500'
        }`}
      >
        Add {type === 'income' ? 'Income' : 'Expense'}
      </button>
    </form>
  );
};

export default AddOperationForm;
