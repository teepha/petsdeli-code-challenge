import { Handler, Context } from 'aws-lambda';
import connectToDatabase from "./config/db";
import config from "./config";
import UserInteractionController from "./controllers/UserInteractionController";

const connectionUrl: string | undefined = config.env === "test" ? config.db.test : config.db.dev;
connectToDatabase(connectionUrl);

export const create: Handler = (event: any, context: Context) => {
  return UserInteractionController.createUserInteraction(event, context);
};
