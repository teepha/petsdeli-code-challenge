import mongoose, { Document } from "mongoose";
import BaseSchema from "./BaseSchema";
require("mongoose-uuid4")(mongoose);

const { UUID } = mongoose.Types as any;

export interface IUserInteraction extends Document {
  eventType: string;
  eventSource: string;
  userId: string;
}

const UserInteractionSchema = new BaseSchema(
  {
    eventType: {
      type: String,
      required: true,
    },
    eventSource: {
      type: String,
      required: true,
    },
    userId: {
      type: UUID,
      required: true,
    },
  },
  { id: false, versionKey: false }
);
UserInteractionSchema.set("toObject", { getters: true });
UserInteractionSchema.set("toJSON", { getters: true });

export default UserInteractionSchema;
