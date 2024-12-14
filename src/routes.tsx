import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import "./styles/global.scss";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);
