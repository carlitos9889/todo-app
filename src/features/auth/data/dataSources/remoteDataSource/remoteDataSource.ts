import { UserEntity } from "../../../domain/entities/UserEntity";
import { RegisterWithEmailAndPasswordParams } from "../../../domain/interfaces/interfaces";

export interface RemoteDataSource {
	loginWithEmailAndPassword: (
		email: string,
		password: string
	) => Promise<UserEntity>;

	logout: () => Promise<void>;

	signInWithPopupWithGooogle: () => Promise<UserEntity>;

	registerWithEmailAndPassword: (params: RegisterWithEmailAndPasswordParams) => Promise<UserEntity>;
}
