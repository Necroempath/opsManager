import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import OperationTable from "../components/OperationTable";
import OperationTypeFilter from "../components/OperationTypeFilter";
import type { OperationFilter } from "../Models/Operation";
import { useState } from "react";

import Totals from "../components/Totals";

const OperationsPage = () => {
  const [type, setType] = useState<OperationFilter>("all");

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
      </div>
      <Totals operations={operations}/>
      <OperationTable operations={operations} categories={categories} />
    </>
  );
};

export default OperationsPage;
