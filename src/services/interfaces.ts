export interface NewUserInteraction {
  eventType: string;
  eventSource: string;
  userId: string;
  [prop: string]: any;
}

export interface IUserInteractionService {
  createNewUserInteraction(attrs: any): Promise<NewUserInteraction>;
}
