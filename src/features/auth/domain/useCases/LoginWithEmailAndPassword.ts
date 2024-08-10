import { AuthRepository } from "../repository/authRepository";

export class LoginWithEmailAndPassword {
	constructor(private authRepository: AuthRepository) {}
	async execute(email: string, password: string) {
		return await this.authRepository.loginWithEmailAndPassword(
			email,
			password
		);
	}
}
