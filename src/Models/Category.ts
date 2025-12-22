import {v4 as uuidv4} from 'uuid'

export interface CategoryProps {
    id: string;
    name: string;
    removable: boolean;
}

export class Category {
    id: string;
    name: string;
    removable: boolean;

    constructor(props: Omit<CategoryProps, 'id'>) {
        this.id = uuidv4();
        this.name = props.name;
        this.removable = props.removable;
    }
}