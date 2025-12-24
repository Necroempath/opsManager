import AddCategoryForm from "../components/AddCategoryForm";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import CategoryTable from "../components/CategoryTable";
import type { CategoryWithUsage } from "../Models/Category";
import { useMemo } from "react";

type CategoryDeletion = "none" | "disabled" | "enabled";

type CategoryRow = {
  value: string;
  refcount: number;
  state: CategoryDeletion;
};

const CategoriesPage = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const operations = useSelector(
    (state: RootState) => state.operations.operations
  );

  const categoriesWithUsage: CategoryWithUsage[] = useMemo(() => {
    const usageMap = new Map<string, number>();

    for (const op of operations) {
      usageMap.set(op.categoryId, (usageMap.get(op.categoryId) ?? 0) + 1);
    }

    return categories.map((cat) => ({
      ...cat,
      usageCount: usageMap.get(cat.id) ?? 0,
    }));
  }, [categories, operations]);

  return (
    <>
      <AddCategoryForm />
      <CategoryTable categories={categoriesWithUsage}/>
    </>
  );
};

export default CategoriesPage;
