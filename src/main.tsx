import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage.tsx";
import OperationsPage from "./pages/OperationsPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import AddOperationPage from "./pages/AddOperationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <OperationsPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />
      },
      {
        path: "/add/:operationId",
        element: <AddOperationPage />
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
