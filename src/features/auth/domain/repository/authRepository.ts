import { UserEntity } from "../entities/UserEntity";
import { RegisterWithEmailAndPasswordParams } from "../interfaces/interfaces";




export interface AuthRepository {
	loginWithEmailAndPassword(
		email: string,
		password: string
	): Promise<UserEntity>;

	logout(): Promise<void>;

	signInWithPopupWithGooogle(): Promise<UserEntity>;


	registerWithEmailAndPassword({
		firstName,
		lastName,
		userName,
		email,
		password,
	}: RegisterWithEmailAndPasswordParams): Promise<UserEntity>;
}
