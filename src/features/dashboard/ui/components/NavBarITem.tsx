import React, { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface PropsIcon {
  color?: string;
}
interface Props extends PropsWithChildren {
  name: string;
  Icon: React.ComponentType<PropsIcon>;
  href?: string;
}

export const NavBarItem: FC<Props> = ({ children, name, Icon, href }) => {
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
