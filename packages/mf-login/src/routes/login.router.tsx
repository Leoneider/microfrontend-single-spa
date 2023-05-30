import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAuth from "../components/layout-auth.component";
import { PublicRoutes } from "../constants";
import Login from "../pages/login/login";
import NotFound from "../pages/not-found/not-found";

const RememberUser = lazy(() => import("../pages/login/remember-user"));
const ForgotPassword = lazy(
  () => import("../pages/login/forgot-password")
);

export default function LoginRouter() {
  return (
    <Routes>
      <Route path={`${PublicRoutes.ROUTES.MAIN}`} element={<LayoutAuth />}>
        <Route index element={<Login />}/>

        <Route path={`${PublicRoutes.LINK.LOGIN}`} element={<Login />} />
        <Route path={`${PublicRoutes.ROUTES.LOGIN}`} element={<Login />} />

        <Route
          path={`${PublicRoutes.ROUTES.REMEMBER_USER}`}
          element={
            <Suspense fallback={<>...</>}>
              <RememberUser />
            </Suspense>
          }
        />
        <Route
          path={`${PublicRoutes.ROUTES.FORGOT_PASSWORD}`}
          element={
            <Suspense fallback={<>...</>}>
              <ForgotPassword />
            </Suspense>
          }
        />

        <Route path={`${PublicRoutes.ROUTES.NOT_FOUND}`} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
