import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Operation, type OperationProps } from "../Models/Operation";

interface OperationState {
    operations: Operation[];
}

const savedOperations = localStorage.getItem('operations');

const initialState: OperationState = {
    operations: savedOperations ? JSON.parse(savedOperations) : []
};

export const operationSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        addOperation: (state, action: PayloadAction<Omit<OperationProps, 'id'>>) => {
            state.operations.push(new Operation(action.payload));
        },
        deleteOperation: (state, action: PayloadAction<string>) => {
            state.operations = state.operations.filter(op => op.id !== action.payload);
        }
    }
});

export const {addOperation, deleteOperation} = operationSlice.actions;

export default operationSlice.reducer