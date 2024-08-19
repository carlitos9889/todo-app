import { UserEntity } from "../entities/UserEntity";
import { AuthRepository } from "../repository/authRepository";

export class OnAuthStateChangedUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(): Promise<UserEntity> {
    return this.authRepository.onAuthStateChanged();
  }
}
