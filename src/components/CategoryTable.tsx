import React from "react";
import type { CategoryWithUsage } from "../Models/Category";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/categorySlice";

interface CategoryTableProps {
  categories: CategoryWithUsage[];
}

const CategoryTable: React.FC<CategoryTableProps> = ({
  categories,
}) => {

    const dispatch = useDispatch();

  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
      <table className="w-full border-collapse text-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-4 py-3 text-left font-medium">
              Operations
            </th>
            <th className="px-4 py-3 text-right font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat, index) => {
            const canDelete = !cat.builtin && cat.usageCount === 0;

            return (
              <tr
                key={cat.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
              >
                <td className="px-4 py-3 text-gray-800">
                  {cat.name}
                  {cat.builtin && (
                    <span className="ml-2 text-xs text-gray-500">
                      (built-in)
                    </span>
                  )}
                </td>

                <td className="px-4 py-3 text-gray-800">
                  {cat.usageCount}
                </td>

                <td className="px-4 py-3 text-right">
                  {!cat.builtin && (
                    <button
                      onClick={() => dispatch(deleteCategory(cat.id))}
                      disabled={!canDelete}
                      className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                        canDelete
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "cursor-not-allowed bg-gray-300 text-gray-500"
                      }`}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            );
          })}

          {categories.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="px-4 py-6 text-center text-gray-500"
              >
                No categories
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
