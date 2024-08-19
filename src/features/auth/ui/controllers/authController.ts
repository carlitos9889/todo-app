import { FirebaseDataSource } from "../../data/dataSources/remoteDataSource/firebaseDataSource";
import { AuthRepositoryImpl } from "../../data/repository/authRepositoryImpl";
import { RegisterWithEmailAndPasswordParams } from "../../domain/interfaces/interfaces";
import {
  LoginWithEmailAndPassword,
  LogoutUseCase,
  OnAuthStateChangedUseCase,
  RegisterWithEmailAndPasswordUseCase,
  SignInWithPopupWithGooogleUseCase,
} from "../../domain/useCases";

export class AuthController {
  loginWithEmailAndPasswordUseCase: LoginWithEmailAndPassword;
  signInWithPopupWithGooogleUseCase: SignInWithPopupWithGooogleUseCase;
  registerWithEmailAndPasswordUseCase: RegisterWithEmailAndPasswordUseCase;
  onAuthStateChangedUseCase: OnAuthStateChangedUseCase;
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

    this.registerWithEmailAndPasswordUseCase =
      new RegisterWithEmailAndPasswordUseCase(this.authRepository);

    this.onAuthStateChangedUseCase = new OnAuthStateChangedUseCase(
      this.authRepository
    );
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    return await this.loginWithEmailAndPasswordUseCase.execute(email, password);
  }

  async logout() {
    await this.logoutUseCase.execute();
  }

  async signInWithPopupWithGooogle() {
    return await this.signInWithPopupWithGooogleUseCase.execute();
  }

  async registerWithEmailAndPassword(
    params: RegisterWithEmailAndPasswordParams
  ) {
    return await this.registerWithEmailAndPasswordUseCase.execute({
      ...params,
    });
  }

  async onAuthStateChanged() {
    return await this.onAuthStateChangedUseCase.execute();
  }
}
