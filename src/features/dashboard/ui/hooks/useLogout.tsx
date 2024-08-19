import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthController } from "../../../auth/ui/controllers/authController";
import { useAuthStore } from "../../../auth/ui/store/authStore";

export const useLogout = () => {
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

  return {
    user,
    mutation,
  };
};
