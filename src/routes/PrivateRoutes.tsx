import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
// Components
import { Layout } from "../components/ui";
// Hooks
import { useTypedSelector } from "../hooks";

/**
 * Компонент отображающий не публичный контент (только для авторизованных пользователей)
 */
export const PrivateRoutes: FC = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useTypedSelector(({ auth }) => auth);

  return isAuth ? (
    <Layout> {children} </Layout>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
