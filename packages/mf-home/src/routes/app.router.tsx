import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../constants";
import AuthGuard from "../guards/auth.guard";
import HomeRouter from "./home.router";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthGuard/>}>
        <Route
          path={`${PrivateRoutes.ROUTES.HOME}/*`}
          element={<HomeRouter />}
        />
      </Route>
    </Routes>
  );
}
