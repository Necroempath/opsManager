import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-4 py-2 rounded-md text-md font-medium transition-colors",
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-800",
    ].join(" ");

  return (
    <header className="shadow-md p-4 flex justify-center gap-4">
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
