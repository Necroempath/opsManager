import { configureStore } from "@reduxjs/toolkit";
import operationsReducer from "./operationSlice";
import categoriesReducer from "./categorySlice";

export const store = configureStore({
    reducer: {
        operations: operationsReducer,
        categories: categoriesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
