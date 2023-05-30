import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutHome } from "../components";
import { PrivateRoutes } from "../constants";

import Home from "../pages/home/home";
import NotFound from "../pages/not-found/not-found";

const TabUno = lazy(() => import("../pages/tab-uno/tab-uno")) ;
const TabDos = lazy(() => import("../pages/tab-dos/tab-dos")) ;
const TabTres = lazy(() => import("../pages/tab-tres/tab-tres")) ;

export default function HomeRouter() {
  return (
    <Routes>
      <Route path={`${PrivateRoutes.ROUTES.MAIN}`} element={<LayoutHome />}>
        <Route index element={<Home />} />

        <Route
          path={`${PrivateRoutes.ROUTES.TAB_UNO}`}
          element={
            <Suspense fallback={<>...</>}>
              <TabUno />
            </Suspense>
          }
        />

        <Route
          path={`${PrivateRoutes.ROUTES.TAB_DOS}`}
          element={
            <Suspense fallback={<>...</>}>
              <TabDos />
            </Suspense>
          }
        />

        <Route
          path={`${PrivateRoutes.ROUTES.TAB_TRES}`}
          element={
            <Suspense fallback={<>...</>}>
              <TabTres />
            </Suspense>
          }
        />

        <Route
          path={`${PrivateRoutes.ROUTES.NOT_FOUND}`}
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}
