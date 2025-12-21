import {v4 as uuidv4} from 'uuid'

export interface CategoryProps {
    id: string;
    name: string;
}

export class Category {
    id: string;
    name: string;

    constructor(props: Omit<CategoryProps, 'id'>) {
        this.id = uuidv4();
        this.name = props.name;
    }
}