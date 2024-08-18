import { AuthRepository } from "../../domain/repository/authRepository";
import { RemoteDataSource } from "../dataSources/remoteDataSource/remoteDataSource";
import { UserEntity } from "../../domain/entities/UserEntity";
import { RegisterWithEmailAndPasswordParams } from "../../domain/interfaces/interfaces";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private remoteDataSource: RemoteDataSource) {}

  registerWithEmailAndPassword(
    params: RegisterWithEmailAndPasswordParams
  ): Promise<UserEntity> {
    return this.remoteDataSource.registerWithEmailAndPassword({ ...params });
  }
  signInWithPopupWithGooogle(): Promise<UserEntity> {
    return this.remoteDataSource.signInWithPopupWithGooogle();
  }

  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserEntity> {
    return await this.remoteDataSource.loginWithEmailAndPassword(
      email,
      password
    );
  }
  async logout(): Promise<void> {
    return await this.remoteDataSource.logout();
  }
}
