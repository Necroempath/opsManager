import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutPage: React.FC = () => {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPage;
