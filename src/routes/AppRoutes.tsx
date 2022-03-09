import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Calendar, Login } from "../pages";

export const AppRoutes = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  console.log("isAuth", isAuth);

  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
