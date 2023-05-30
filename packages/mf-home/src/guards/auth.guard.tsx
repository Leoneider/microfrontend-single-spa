import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const userState = useSelector((store: any) => store.user);

  return userState.name ? <Outlet /> : <Navigate replace to={"/auth"} />;
};

export default AuthGuard;
