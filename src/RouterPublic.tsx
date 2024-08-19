import { useCheckLogin } from "./features/auth/ui/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const RouterPublic = () => {
  const { user } = useCheckLogin();
  if (user) return <Navigate to={"/"} />;

  return <Outlet />;
};
