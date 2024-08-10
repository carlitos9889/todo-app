import { UserEntity } from "../../../domain/entities/UserEntity";

export interface RemoteDataSource {
	loginWithEmailAndPassword: (
		email: string,
		password: string
	) => Promise<UserEntity>;

	logout: () => Promise<void>;
}
