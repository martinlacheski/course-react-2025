import { RouterProvider } from "react-router";
import { UserContextProvider } from "./context/UserProvider";
import { appRouter } from "./router/app.router";

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};
