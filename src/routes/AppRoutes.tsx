import { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Components
import { AboutPage, CalendarPage, LoginPage, ProfilePage } from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";
// Hooks
import { useActions, useTypedSelector } from "../hooks";
// Types
import { User } from "../models";

/**
 * Компонент содержащий все маршруты проекта
 */
export const AppRoutes: FC = () => {
  const { isAuth } = useTypedSelector(({ auth }) => auth);
  const { setAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as User);
      setAuth(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<CalendarPage />} />

        <Route path="profile" element={<ProfilePage />} />

        <Route path="about" element={<AboutPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
    </Routes>
  );
};
