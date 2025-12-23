import { configureStore } from "@reduxjs/toolkit";
import operationsReducer from "./operationSlice";
import categoriesReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    operations: operationsReducer,
    categories: categoriesReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("operations", JSON.stringify(state.operations.operations));
  localStorage.setItem("categories", JSON.stringify(state.categories.categories));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
