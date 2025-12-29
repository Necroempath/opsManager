Operations Manager is a client-side React application for managing financial operations
(income and expenses) with categories, filtering, totals calculation, and local persistence.

The project focuses on clean architecture, predictable state management, and a calm, readable UI rather than visual overload.

**Features**

Add income and expense operations
Categorize operations
View all operations in a structured table
Filter operations by type (All / Income / Expense)

**Automatic calculation of:**

Total income

Total expenses

Net balance

**Category management**

Built-in categories (cannot be deleted)

Custom categories

Category deletion blocked if used by any operation

Persistent storage using localStorage

Safe deletion via modal dialog (React Portal)

**Tech Stack**

React (with Hooks)

TypeScript

Redux Toolkit

React Redux

React Router (Data Router)

Tailwind CSS

UUID for entity identification

Vite as build tool

**Architectural Decisions**
State Management

Global state is handled with Redux Toolkit

All reducers work only with plain serializable objects

Local storage persistence is implemented via a store subscriber, not inside reducers


Subscriber saves state snapshot

No side effects inside reducers
