import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded hover:bg-primary transition-colors ${
      isActive ? 'bg-primary text-white' : 'text-gray-700'
    }`;

  return (
    <header className="bg-bg shadow-md p-4 flex justify-center gap-4">
      <NavLink to="/" className={linkClass}>
        Operations
      </NavLink>
      <NavLink to="/categories" className={linkClass}>
        Categories
      </NavLink>
      <NavLink to="/add/income" className={linkClass}>
        Add Income
      </NavLink>
      <NavLink to="/add/expense" className={linkClass}>
        Add Expense
      </NavLink>
    </header>
  );
};

export default Header;
