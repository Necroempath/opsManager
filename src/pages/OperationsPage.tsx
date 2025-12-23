import { useSelector } from "react-redux";
import type { RootState } from "../store";
import OperationTable from "../components/OperationTable";

const OperationsPage = () => {
  const operations = useSelector((state: RootState) => state.operations.operations);
  const categories = useSelector((state: RootState) => state.categories.categories);

  return <OperationTable operations={operations} categories={categories} />;
};

export default OperationsPage;
