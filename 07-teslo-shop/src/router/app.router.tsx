import { lazy } from "react";
//import { createBrowserRouter, Navigate } from "react-router";
import { createHashRouter, Navigate } from "react-router";
import { DashboardPage } from "../admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "../admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "../admin/pages/products/AdminProductsPage";
import { LoginPage } from "../auth/pages/login/LoginPage";
import { RegisterPage } from "../auth/pages/register/RegisterPage";
import { ShopLayout } from "../shop/layouts/ShopLayout";
import { GenderPage } from "../shop/pages/gender/GenderPage";
import { HomePage } from "../shop/pages/home/HomePage";
import { ProductPage } from "../shop/pages/product/ProductPage";
import { AdminRoute } from "./routes/ProtectedRoutes";

const AuthLayout = lazy(() => import("../auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("../admin/layouts/AdminLayout"));

//export const appRouter = createBrowserRouter([
export const appRouter = createHashRouter([
  {
    // Main Routes
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

  // Auth Routes
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

  // Admin Routes
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
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
  // Si no se encuentra la ruta, redirige a la ruta principal
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
