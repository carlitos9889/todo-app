import { Outlet } from "react-router-dom";
import { NavBar } from "./features/dashboard/ui/components";

export const RouterPrivate = () => {
  return (
    <>
      {/* do something */}
      <NavBar />
      <Outlet />
    </>
  );
};
