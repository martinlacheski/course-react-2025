import { createBrowserRouter } from "react-router";

import { AdminPage } from "@/admin/pages/AdminPage";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        // path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        // path: "",
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
