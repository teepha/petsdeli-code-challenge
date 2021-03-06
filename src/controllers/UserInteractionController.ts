import { Context } from "aws-lambda";
import UserInteractionService from "../services/UserInteractionService";
import UserInteractionRepository from "../repositories/UserInteractionRepository";
import { NewUserInteraction } from "../services/interfaces";
import { MessageUtil } from "../utils/message";

const userInteractionRepository = new UserInteractionRepository();
const userInteractionService = new UserInteractionService(
  userInteractionRepository
);

class UserInteractionController {
  static async createUserInteraction(event: any, context?: Context) {
    const { eventType, eventSource, userId }: NewUserInteraction = JSON.parse(
      event.body
    );

    if (typeof eventType !== 'string' || typeof eventSource !== 'string' || typeof userId !== 'string') {
      console.error('Validation Failed');
      throw new Error('Couldn\'t submit user interactions because of validation errors.');
    }

    try {
      const userInteractionData =
        await userInteractionService.createNewUserInteraction({
          eventType,
          eventSource,
          userId,
        });

      return MessageUtil.success(userInteractionData);
    } catch (error) {
      return MessageUtil.error(error.code, error.message);
    }
  }
}

export default UserInteractionController;
