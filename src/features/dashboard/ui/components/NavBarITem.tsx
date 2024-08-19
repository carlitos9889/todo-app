import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  name: string;
  icon: JSX.Element;
  href?: string;
}

export const NavBarItem: FC<Props> = ({ children, name, icon }) => {
  return (
    <li className="flex gap-3">
      <span className="w-[8%]">{icon}</span>
      {name}
      {children}
    </li>
  );
};
