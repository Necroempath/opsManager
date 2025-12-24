import {v4 as uuidv4} from 'uuid'

export interface CategoryProps {
    id: string;
    name: string;
    builtin: boolean;
}

export class Category {
    id: string;
    name: string;
    builtin: boolean;

    constructor(props: Omit<CategoryProps, 'id'>) {
        this.id = uuidv4();
        this.name = props.name;
        this.builtin = props.builtin;
    }
}

export interface CategoryWithUsage extends Category {
    usageCount: number
}