import type { Operation } from "../Models/Operation";
import type { Category } from "../Models/Category";
import { useState } from "react";
import DeletionPortal from "./DeletionPortal";
import { useDispatch } from "react-redux";
import { deleteOperation } from "../store/operationSlice";

interface OperationTableProps {
  operations: Operation[];
  categories: Category[];
}

const OperationTable: React.FC<OperationTableProps> = ({
  operations,
  categories,
}) => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const getCategoryName = (id: string) =>
    categories.find((c) => c.id === id)?.name ?? "Unknown";

  return (
    <div className="overflow-hidden rounded-md">
      <table className="w-full border-collapse text-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Type</th>
            <th className="px-4 py-3 text-left font-medium">Category</th>
            <th className="px-4 py-3 text-left font-medium">Title</th>
            <th className="px-4 py-3 text-left font-medium">Amount</th>
            <th className="px-4 py-3 text-left font-medium">Date</th>
            <th className="px-4 py-3 text-left font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {operations.map((op, index) => (
            <tr
              key={op.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
            >
              <td className="px-4 py-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium text-white ${
                    op.type === "income" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {op.type}
                </span>
              </td>

              <td className="px-4 py-3 text-gray-800">
                {getCategoryName(op.categoryId)}
              </td>

              <td className="px-4 py-3 text-gray-800">{op.title}</td>

              <td className="px-4 py-3 font-medium text-gray-900">
                {op.amount}$
              </td>

              <td className="px-4 py-3 text-gray-700">{op.date}</td>
              <td>
                <button
                  className="px-4 py-1 my-2 bg-red-500 text-white rounded transition-colors hover:cursor-pointer hover:bg-red-600"
                  onClick={() => setId(op.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {operations.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                No operations yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <DeletionPortal
        id={id}
        onCancel={() => setId((p) => (p = ''))}
        onSubmit={() => {
          dispatch(deleteOperation(id));
          setId((p) => (p = ''));
        }}
      />
    </div>
  );
};

export default OperationTable;
