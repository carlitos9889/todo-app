import { UserEntity } from "../entities/UserEntity";
import { AuthRepository } from "../repository/authRepository";

export class SignInWithPopupWithGooogleUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(): Promise<UserEntity> {
    return await this.authRepository.signInWithPopupWithGooogle();
  }
}
