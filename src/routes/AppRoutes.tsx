import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import { useActions, useTypedSelector } from "../hooks";
import { User } from "../models";
import { CalendarPage, LoginPage } from "../pages";

export const AppRoutes = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { setAuth, setUser } = useActions();
  // const isAuth = false;
  console.log("isAuth", isAuth);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as User);
      setAuth(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
