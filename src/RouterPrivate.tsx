import { Outlet } from "react-router-dom";
import { NavBar, NavBarSide } from "./features/dashboard/ui/components";

export const RouterPrivate = () => {
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
