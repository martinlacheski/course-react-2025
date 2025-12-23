import { useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";
import { UserContext, type AuthStatus } from "./UserContext";

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) return "not-authenticated";

    const user = users.find((user) => user.id === +storedUserId);
    return user ? "authenticated" : "not-authenticated";
  });

  const [user, setUser] = useState<User | null>(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) return null;

    return users.find((user) => user.id === +storedUserId) || null;
  });

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAuthStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("userId");
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === "authenticated",
        user: user,

        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
