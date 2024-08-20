import { Navigate, Outlet } from "react-router-dom";
import { NavBar, NavBarSide } from "./features/dashboard/ui/components";
import { useCheckLogin } from "./features/auth/ui/hooks";

export const RouterPrivate = () => {
  const { user } = useCheckLogin();

  if (!user) return <Navigate to="/auth/login" />;

  return (
    <>
      {/* do something */}
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <NavBarSide>
          <Outlet />
        </NavBarSide>
      </div>
    </>
  );
};
