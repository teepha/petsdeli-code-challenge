import { NewUserInteraction, IUserInteractionService } from "./interfaces";
import { IRepository } from "../repositories/interfaces";

class UserInteractionService implements IUserInteractionService {
  private userInteractionRepository: IRepository<NewUserInteraction>;

  constructor(userInteractionRepository: IRepository<NewUserInteraction>) {
    this.userInteractionRepository = userInteractionRepository;
  }

  async createNewUserInteraction(
    options: NewUserInteraction
  ): Promise<NewUserInteraction> {
    try {
      const userInteraction = await this.userInteractionRepository.create(
        options
      );
      return userInteraction.toObject();
    } catch (error) {
      throw error;
    }
  }
}

export default UserInteractionService;
