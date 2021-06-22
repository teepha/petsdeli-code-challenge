import BaseRepository from "./BaseRepository";
import UserInteractionSchema, { IUserInteraction } from "../schemas/UserInteractionSchema";

class UserInteractionRepository extends BaseRepository<IUserInteraction> {
  constructor() {
    super("UserInteraction", UserInteractionSchema);
  }
}

export default UserInteractionRepository;
