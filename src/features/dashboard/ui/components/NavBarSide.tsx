import { Avatar } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

import {
  DashboardIcon,
  HelpIcon,
  LogoutIcon,
  MyTaskIcon,
  NavBarItem,
  SettingsIcon,
  TaskCategoryIcon,
  VitalTaskIcon,
} from ".";

interface Item {
  name: string;
  icon: JSX.Element;
  href: string;
}

export const NavBarSide: FC<PropsWithChildren> = ({ children }) => {
  const ITEMS: Item[] = [
    { name: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
    { name: "My Task", icon: <MyTaskIcon />, href: "/my-task" },
    { name: "Vital Task", icon: <VitalTaskIcon />, href: "/vital-task" },
    {
      name: "Task Category",
      icon: <TaskCategoryIcon />,
      href: "/task-category",
    },
    { name: "Settings", icon: <SettingsIcon />, href: "/settings" },
    { name: "Help", icon: <HelpIcon />, href: "/help" },
  ];

  return (
    <div className="flex-grow grid grid-cols-2">
      <div className="flex flex-col-reverse justify-between">
        {/* Nav Bar */}
        <nav className="hidden lg:block bg-primary h-full w-1/2 rounded-e-xl pt-14 relative shadow-[4px_0px_6px_rgba(0,0,0,0.25)] text-white px-10">
          {/* avatar */}
          <section>
            <Avatar
              isBordered
              as="button"
              color="primary"
              name="messie"
              size="lg"
              className="absolute top-0 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
              src="data:image/jpeg;base64,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"
            />
          </section>
          <section>
            <p className="text-center font-bold">Carlos Valdes</p>
            <p className="text-center text-sm">carlitos98081212121@gmail.com</p>
          </section>
          <div className="flex flex-col justify-around h-5/6">
            <section>
              <ul className="space-y-7 ">
                {ITEMS.map((item) => (
                  <NavBarItem key={item.name} {...item} />
                ))}
              </ul>
            </section>
            <NavBarItem name="Logout" icon={<LogoutIcon />} />
          </div>
        </nav>
        <div className="hidden md:block h-[13%]"></div>
      </div>
      {children}
    </div>
  );
};
