import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "./features/auth/ui/store/authStore";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { AuthController } from "./features/auth/ui/controllers/authController";

export const RouterPrivate = () => {
	const user = useAuthStore((state) => state.user);
	const logout = useAuthStore((state) => state.logout);
	const navigate = useNavigate();

	const authController = useMemo(() => new AuthController(), []);

	const mutation = useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authController.logout(),
	});

	const handleLogout = () => {
		mutation.mutate(void 0, {
			onSuccess: () => {
				logout();
				navigate("/auth/login", { replace: true });
			},
		});
	};

	const { isPending } = mutation;

	if (!user) return <Navigate to="/auth/login" />;

	return (
		<>
			{/* do something */}
			<div className="flex flex-col justify-center items-center h-screen">
				<p>{user.email}</p>
				<p>{user.id}</p>
				<p>{user.name}</p>
				<Button disabled={isPending} onClick={handleLogout}>
					{isPending ? "Loading..." : "Logout"}
				</Button>
			</div>
			<Outlet />
		</>
	);
};
