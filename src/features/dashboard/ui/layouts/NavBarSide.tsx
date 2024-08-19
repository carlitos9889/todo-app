import { Avatar } from "@nextui-org/react";
import { FC, PropsWithChildren, useMemo } from "react";

import {
  DashboardIcon,
  HelpIcon,
  LogoutIcon,
  MyTaskIcon,
  NavBarItem,
  SettingsIcon,
  TaskCategoryIcon,
  VitalTaskIcon,
} from "../components";
import { NavLayout } from ".";
import AccountDashboard from "../components/AccountDashboard";
import { AuthController } from "../../../auth/ui/controllers/authController";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../auth/ui/store/authStore";

export const NavBarSide: FC<PropsWithChildren> = ({ children }) => {
  const authController = useMemo(() => new AuthController(), []);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authController.logout(),
    onSuccess: () => {
      logout();
      navigate("/auth/login", { replace: true });
    },
    onError: (e) => {
      console.log({ e });
    },
  });

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
