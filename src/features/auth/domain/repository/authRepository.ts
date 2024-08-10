import { UserEntity } from "../entities/UserEntity";

export interface AuthRepository {
	loginWithEmailAndPassword(
		email: string,
		password: string
	): Promise<UserEntity>;
	logout(): Promise<void>;
}
