import { Avatar } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

import {
  DashboardIcon,
  HelpIcon,
  LogoutIcon,
  MyTaskIcon,
  SettingsIcon,
  TaskCategoryIcon,
  VitalTaskIcon,
} from ".";
import { NavLayout } from "../layouts";
import AccountDashboard from "./AccountDashboard";
import { useLogout } from "../hooks";
import { NavLink } from "react-router-dom";

interface PropsIcon {
  color?: string;
}
interface Props extends PropsWithChildren {
  name: string;
  Icon: React.ComponentType<PropsIcon>;
  href?: string;
}

const NavBarItem: FC<Props> = ({ children, name, Icon, href }) => {
  return (
    <li>
      <NavLink
        to={href || "/"}
        className={({ isActive }) => (isActive ? "navLinkSelected" : "navLink")}
      >
        {({ isActive }) => (
          <>
            <Icon color={isActive ? "#FF6767" : "white"} />
            {name}
            {children}
          </>
        )}
      </NavLink>
    </li>
  );
};

export const NavBarSide: FC<PropsWithChildren> = ({ children }) => {
  const { user, mutation } = useLogout();

  return (
    <div className="flex-grow grid grid-cols-3">
      <div className="col-span-1 flex flex-col-reverse justify-between">
        {/* Nav Bar */}
        <NavLayout>
          <section>
            <Avatar
              isBordered
              as="button"
              color="primary"
              name={user!.name + " avatar"}
              size="lg"
              className="absolute top-0 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
              src={user!.photoUrl}
            />
          </section>
          <AccountDashboard email={user!.email} displayName={user!.name} />
          <div className="flex flex-col justify-around h-[90%]">
            <section>
              <ul className="space-y-1">
                <NavBarItem
                  name="Dashboard"
                  Icon={(props) => <DashboardIcon {...props} />}
                  href="dashboard"
                />
                <NavBarItem
                  name="My Task"
                  Icon={(props) => <MyTaskIcon {...props} />}
                  href="my-task"
                />
                <NavBarItem
                  name="Vital Task"
                  Icon={(props) => <VitalTaskIcon {...props} />}
                  href="vital-task"
                />
                <NavBarItem
                  name="Task Category"
                  Icon={(props) => <TaskCategoryIcon {...props} />}
                  href="task-category"
                />
                <NavBarItem
                  name="Settings"
                  Icon={(props) => <SettingsIcon {...props} />}
                  href="settings"
                />
                <NavBarItem
                  name="Help"
                  Icon={(props) => <HelpIcon {...props} />}
                  href="help"
                />
              </ul>
            </section>
            <ul>
              <div onClick={() => mutation.mutate()}>
                <NavBarItem name="Logout" Icon={() => <LogoutIcon />} />
              </div>
            </ul>
          </div>
        </NavLayout>
        <div className="hidden md:block h-[13%]"></div>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
};
