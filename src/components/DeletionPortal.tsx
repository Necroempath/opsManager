import React from "react";
import { createPortal } from "react-dom";

interface DeleteOperationProps {
  id: string;
  onCancel: () => void;
  onSubmit: () => void;
}

const DeletionPortal: React.FC<DeleteOperationProps> = ({
  id,
  onCancel,
  onSubmit,
}) => {
  if (!id) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">Delete operation</h2>

        <p className="text-sm text-gray-600 mb-3">Are you sure?</p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className={`px-4 py-2 rounded  bg-red-500 text-white transition-colors hover:cursor-pointer hover:bg-red-600`}
            onClick={() => onSubmit()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeletionPortal;
