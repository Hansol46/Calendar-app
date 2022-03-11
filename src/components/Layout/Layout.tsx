import { Container } from "@mui/material";
import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../Header";

export const Layout: FC = () => {
  return (
    <>
      <Header />

      {/* Данный компонент указывает место где будет весь остальной контент */}
      <Container>
        <Outlet />
      </Container>

      <footer>2022 create by Yury</footer>
    </>
  );
};
