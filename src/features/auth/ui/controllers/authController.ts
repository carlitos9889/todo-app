import { FirebaseDataSource } from "../../data/dataSources/remoteDataSource/firebaseDataSource";
import { AuthRepositoryImpl } from "../../data/repository/authRepositoryImpl";
import { SignInWithPopupWithGooogleUseCase } from "../../domain/useCases/SignInWithPopupWithGooogleUseCase";
import {
	LoginWithEmailAndPassword,
	LogoutUseCase,
} from "../../domain/useCases";

export class AuthController {
	loginWithEmailAndPasswordUseCase: LoginWithEmailAndPassword;
	signInWithPopupWithGooogleUseCase: SignInWithPopupWithGooogleUseCase;
	logoutUseCase: LogoutUseCase;
	authRepository: AuthRepositoryImpl;
	remoteDatasource: FirebaseDataSource;

	constructor() {
		this.remoteDatasource = new FirebaseDataSource();
		this.authRepository = new AuthRepositoryImpl(this.remoteDatasource);
		this.loginWithEmailAndPasswordUseCase = new LoginWithEmailAndPassword(
			this.authRepository
		);
		this.logoutUseCase = new LogoutUseCase(this.authRepository);
		this.signInWithPopupWithGooogleUseCase =
			new SignInWithPopupWithGooogleUseCase(this.authRepository);
	}

	async loginWithEmailAndPassword(email: string, password: string) {
		return await this.loginWithEmailAndPasswordUseCase.execute(
			email,
			password
		);
	}

	async logout() {
		await this.logoutUseCase.execute();
	}

	async signInWithPopupWithGooogle() {
		return await this.signInWithPopupWithGooogleUseCase.execute();
	}
}
