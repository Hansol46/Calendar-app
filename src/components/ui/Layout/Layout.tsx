import { FC } from "react";
import { Outlet } from "react-router-dom";
// Components
import { Footer } from "../../Footer";
import { Header } from "../../Header";

/**
 * Общий каркас проекта
 */
export const Layout: FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
