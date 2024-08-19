import { useMutation } from "@tanstack/react-query";
import { useMemo, useEffect } from "react";
import { AuthController } from "../controllers/authController";
import { useAuthStore } from "../store/authStore";

export const useCheckLogin = () => {
  const authController = useMemo(() => new AuthController(), []);
  const onAuthStateChanged = useAuthStore((state) => state.onAuthStateChanged);
  const user = useAuthStore((state) => state.user);

  const mutation = useMutation({
    mutationKey: ["onAuthStateChanged"],
    mutationFn: () => authController.onAuthStateChanged(),
    onSuccess: (user) => {
      onAuthStateChanged(user);
    },
  });

  useEffect(() => {
    mutation.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
  };
};
