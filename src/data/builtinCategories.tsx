import { Category } from "../Models/Category";


export const defaultCategories: Category[] = [
  new Category({ name: 'Salary', builtin: true }),
  new Category({ name: 'Freelance', builtin: true }),
  new Category({ name: 'Food', builtin: true }),
  new Category({ name: 'Transport', builtin: true }),
  new Category({ name: 'Utilities', builtin: true }),
  new Category({ name: 'Entertainment', builtin: true }),
  new Category({ name: 'Healthcare', builtin: true }),
  new Category({ name: 'Education', builtin: true }),
  new Category({ name: 'Shopping', builtin: true }),
  new Category({ name: 'Miscellaneous', builtin: true }),
];
