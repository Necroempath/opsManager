import type { OperationType } from "../Models/Operation";

export const parseOperationType = (type?: string | null) : OperationType | null => {
    if(type === 'income' || type === "expense") {
        return type;
    }

    return null;
}