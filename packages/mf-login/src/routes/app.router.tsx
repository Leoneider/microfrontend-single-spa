import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../constants";
import Login from "../pages/login/login";

import LoginRouter from "./login.router";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={`${PublicRoutes.ROUTES.AUTH}/*`} element={<LoginRouter />}></Route>
    </Routes>
  );
}


