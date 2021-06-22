import { Schema, SchemaDefinition, SchemaOptions } from "mongoose";

class BaseSchema extends Schema {
  constructor(definitions: SchemaDefinition, schemaOptions: SchemaOptions) {
    const defaultDefinition = {
      createdAt: { type: Date, default: Date.now },
    };

    super({ ...defaultDefinition, ...definitions }, { ...schemaOptions });
  }
}
export default BaseSchema;
