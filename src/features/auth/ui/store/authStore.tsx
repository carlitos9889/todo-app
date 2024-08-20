import { create, StateCreator } from "zustand";
import { UserEntity } from "../../domain/entities/UserEntity";
import { devtools, persist } from "zustand/middleware";

export type UserStateStore = {
  user?: UserEntity;
  loginWithEmailAndPassword: (user: UserEntity) => void;
  logout: () => void;
  signInWithPopupWithGooogle: (user: UserEntity) => void;
  registerWithEmailAndPassword: (user: UserEntity) => void;
  onAuthStateChanged: (user: UserEntity) => void;
};

const userMiddleware = (f: StateCreator<UserStateStore>) =>
  devtools(persist(f, { name: "userStore" }));

export const useAuthStore = create<UserStateStore>()(
  userMiddleware((set) => ({
    user: undefined,
    onAuthStateChanged: (user) => set({ user }),
    loginWithEmailAndPassword: (user) => set({ user }),
    logout: () => set((state) => ({ ...state, user: undefined })),
    signInWithPopupWithGooogle: (user) => set({ user }),
    registerWithEmailAndPassword: (user) => set({ user }),
  }))
);
