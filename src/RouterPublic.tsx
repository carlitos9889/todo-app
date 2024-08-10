import { useAuthStore } from "./features/auth/ui/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

export const RouterPublic = () => {
	const user = useAuthStore((state) => state.user);

	if (user) return <Navigate to={"/"} />;

	return <Outlet />;
};
