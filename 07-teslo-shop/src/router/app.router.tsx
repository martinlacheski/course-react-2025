import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { DashboardPage } from "../admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "../admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "../admin/pages/products/AdminProductsPage";
import { LoginPage } from "../auth/pages/login/LoginPage";
import { RegisterPage } from "../auth/pages/register/RegisterPage";
import { ShopLayout } from "../shop/layouts/ShopLayout";
import { GenderPage } from "../shop/pages/gender/GenderPage";
import { HomePage } from "../shop/pages/home/HomePage";
import { ProductPage } from "../shop/pages/product/ProductPage";

const AuthLayout = lazy(() => import("../auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("../admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
  {
    // shop routes
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "product/:idSlug",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <GenderPage />,
      },
    ],
  },
  // auth routes
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  // admin routes
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "products/:id",
        element: <AdminProductPage />,
      },
    ],
  },
  // not found route
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
