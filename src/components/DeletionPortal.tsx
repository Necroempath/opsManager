import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface DeleteOperationProps {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (title: string) => void;
}

const DeletionPortal: React.FC<DeleteOperationProps> = ({
  isOpen,
  onCancel,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">
          Delete operations
        </h2>

        <p className="text-sm text-gray-600 mb-3">
          All operations with this title will be deleted
        </p>

        <input
          className="w-full border rounded px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-red-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Operation title"
        />

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            disabled={!title.trim()}
            className={`px-4 py-2 rounded text-white transition-colors
              ${title.trim()
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-red-300 cursor-not-allowed'}
            `}
            onClick={() => {
              onSubmit(title.trim());
              setTitle('');
            }}
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
