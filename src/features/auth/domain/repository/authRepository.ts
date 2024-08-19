import { UserEntity } from "../entities/UserEntity";
import { RegisterWithEmailAndPasswordParams } from "../interfaces/interfaces";

export interface AuthRepository {
  loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserEntity>;

  logout(): Promise<void>;

  onAuthStateChanged(): Promise<UserEntity>;

  signInWithPopupWithGooogle(): Promise<UserEntity>;

  registerWithEmailAndPassword({
    userName,
    email,
    password,
  }: RegisterWithEmailAndPasswordParams): Promise<UserEntity>;
}
