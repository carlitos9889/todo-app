import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  displayName: string;
  email: string;
}

const AccountDashboard: FC<Props> = ({ children, displayName, email }) => {
  return (
    <section>
      <p className="text-center font-bold">{displayName}</p>
      <p className="text-center text-sm">{email}</p>
      {children}
    </section>
  );
};

export default AccountDashboard;
