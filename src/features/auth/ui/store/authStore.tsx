import { create, StateCreator } from "zustand";
import { UserEntity } from "../../domain/entities/UserEntity";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user?: UserEntity;
}

interface UserActions {
  loginWithEmailAndPassword: (user: UserEntity) => void;
  logout: () => void;
  signInWithPopupWithGooogle: (user: UserEntity) => void;
  registerWithEmailAndPassword: (user: UserEntity) => void;
  onAuthStateChanged: (user: UserEntity) => void;
}

const userMiddleware = (f: StateCreator<UserState & UserActions>) =>
  devtools(persist(f, { name: "userStore" }));

export const useAuthStore = create<UserState & UserActions>()(
  userMiddleware((set) => ({
    user: undefined,
    onAuthStateChanged: (user) => set({ user }),
    loginWithEmailAndPassword: (user) => set({ user }),
    logout: () => set((state) => ({ ...state, user: undefined })),
    signInWithPopupWithGooogle: (user) => set({ user }),
    registerWithEmailAndPassword: (user) => set({ user }),
  }))
);
