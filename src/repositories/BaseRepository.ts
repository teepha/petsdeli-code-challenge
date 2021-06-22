import { Model, model, Schema, Document } from "mongoose";
import { IRepository } from "./interfaces";

class BaseRepository<T extends Document> implements IRepository<T> {
  private name: string;
  protected model: Model<T>;

  constructor(name: string, schema: Schema) {
    this.name = name;
    this.model = model<T>(this.name, schema);
  }

  async create(options: any): Promise<T> {
    try {
      const document = await this.model.create(options);
      return document;
    } catch (error) {
      throw error;
    }
  }
}

export default BaseRepository;
