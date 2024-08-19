import { FC, PropsWithChildren } from "react";

export const NavLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="hidden animate-fadeInRigth lg:block bg-primary h-full w-3/4 rounded-e-xl pt-14 relative shadow-[4px_0px_6px_rgba(0,0,0,0.25)] text-white px-10">
      {children}
    </nav>
  );
};
