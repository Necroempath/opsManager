import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Category, type CategoryProps } from "../Models/Category";

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: []
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Omit<CategoryProps, 'id'>>) => {
            state.categories.push(new Category(action.payload));
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            state.categories.filter(cat => cat.id !== action.payload);
        },
        renameCategory: (state, action: PayloadAction<{id: string, newName: string}>) => {
            let category = state.categories.find(cat => cat.id === action.payload.id);

            if(category) category.name = action.payload.newName;
        }
    }
});

export const {addCategory, deleteCategory, renameCategory} = categorySlice.actions;