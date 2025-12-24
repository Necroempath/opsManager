import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import OperationTable from "../components/OperationTable";
import OperationTypeFilter from "../components/OperationTypeFilter";
import type { OperationFilter } from "../Models/Operation";
import { useState } from "react";
import DeletionPortal from "../components/DeletionPortal";
import { deleteOperation } from "../store/operationSlice";
import Totals from "../components/Totals";

const OperationsPage = () => {
  const [type, setType] = useState<OperationFilter>("all");
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const operations = useSelector(
    (state: RootState) => state.operations.operations
  ).filter((op) => (type === "all" ? true : op.type === type));

  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  return (
    <>
      <div className="flex justify-between">
        <OperationTypeFilter
          value={type}
          onChange={(value: OperationFilter) => setType((p) => (p = value))}
        />
        <button
          className="px-4 py-1 my-2 bg-red-500 text-white rounded"
          onClick={() => setIsOpen(true)}
        >
          Delete operations
        </button>
      </div>
      <Totals operations={operations}/>
      <OperationTable operations={operations} categories={categories} />

      <DeletionPortal
        isOpen={isOpen}
        onCancel={() => setIsOpen((p) => (p = false))}
        onSubmit={(title: string) => {
          dispatch(deleteOperation(title))
          setIsOpen(p => p = false);
        }}
      />
    </>
  );
};

export default OperationsPage;
