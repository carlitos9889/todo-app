import { UserEntity } from "../entities/UserEntity";
import { AuthRepository } from "../repository/authRepository";

export class SignInWithPopupWithGooogleUseCase {
	constructor(private authRepository: AuthRepository) {}

	async execute(): Promise<UserEntity> {
		return await this.authRepository.signInWithPopupWithGooogle();
	}
}
