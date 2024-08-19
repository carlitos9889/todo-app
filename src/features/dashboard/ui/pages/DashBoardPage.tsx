import { Button } from "@nextui-org/react";
import { useAuthStore } from "../../../auth/ui/store/authStore";
export const DashBoardPage = (): JSX.Element => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="grid place-content-center">
      <h1>DashBoardPage</h1>

      {user && (
        <div>
          <h2>User</h2>
          <p>{user.email}</p>
          <p>{user.name}</p>
          <Button className="">LOgout</Button>
        </div>
      )}
    </div>
  );
};
