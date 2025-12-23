import React from 'react';
import type { OperationFilter } from '../Models/Operation';

interface OperationTypeFilterProps {
  value: OperationFilter;
  onChange: (value: OperationFilter) => void;
}

const baseBtn =
  'px-4 py-2 text-sm font-medium transition-colors focus:outline-none';

const OperationTypeFilter: React.FC<OperationTypeFilterProps> = ({ value, onChange }) => {
  const buttonClass = (active: boolean, variant: 'default' | 'income' | 'expense') =>
    [
      baseBtn,
      'border',
      active
        ? variant === 'income'
          ? 'bg-green-500 border-green-500 text-white'
          : variant === 'expense'
          ? 'bg-red-500 border-red-500 text-white'
          : 'bg-blue-600 border-blue-600 text-white'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
    ].join(' ');

  return (
    <div className="inline-flex mb-6 rounded-md overflow-hidden">
      <button
        className={buttonClass(value === 'all', 'default')}
        onClick={() => onChange('all')}
      >
        All
      </button>

      <button
        className={buttonClass(value === 'income', 'income')}
        onClick={() => onChange('income')}
      >
        Income
      </button>

      <button
        className={buttonClass(value === 'expense', 'expense')}
        onClick={() => onChange('expense')}
      >
        Expense
      </button>
    </div>
  );
};

export default OperationTypeFilter;
