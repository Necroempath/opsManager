import type { Operation } from "../Models/Operation"

type TotalsProps = {
  operations: Operation[];
};

const Totals: React.FC<TotalsProps> = ({ operations }) => {
  const totals = {
    income: 0,
    expense: 0,
  };

  operations.forEach(op => {
    totals[op.type] += op.amount;
  });

  const balance = totals.income - totals.expense;

  return (
    <div className="mb-6 flex justify-between rounded-md border border-gray-300 bg-white px-6 py-4 text-md shadow-sm">
      
      <div className="flex flex-col">
        <span className="text-gray-500">Income</span>
        <span className="font-medium text-green-600">
          {totals.income} $
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-500">Expense</span>
        <span className="font-medium text-red-600">
          {totals.expense} $
        </span>
      </div>

      <div className="flex flex-col text-right">
        <span className="text-gray-500">Balance</span>
        <span
          className={`font-semibold ${
            balance >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {balance} $
        </span>
      </div>

    </div>
  );
};

export default Totals;
