import {v4 as uuidv4} from 'uuid';

export type OperationType = 'income' | 'expense';

export interface OperationProps {
  id: string;
  type: OperationType;
  title: string;
  amount: number;
  date: string;
  categoryId: string;
}

export class Operation {
  id: string;
  type: OperationType;
  title: string;
  amount: number;
  date: string;
  categoryId: string;

  constructor(props: Omit<OperationProps, 'id'>) {
    this.id = uuidv4();
    this.type = props.type;
    this.title = props.title;
    this.amount = props.amount;
    this.date = props.date;
    this.categoryId = props.categoryId;
  }
}
