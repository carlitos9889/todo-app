import { UserEntity } from "../entities/UserEntity";
import { RegisterWithEmailAndPasswordParams } from "../interfaces/interfaces";
import { AuthRepository } from "../repository/authRepository";

export class RegisterWithEmailAndPasswordUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(
    params: RegisterWithEmailAndPasswordParams
  ): Promise<UserEntity> {
    return await this.authRepository.registerWithEmailAndPassword({
      ...params,
    });
  }
}
