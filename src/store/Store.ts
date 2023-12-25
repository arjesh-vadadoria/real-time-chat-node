export type UserId = string;

export interface Chat {
  id: string;
  userId: UserId;
  senderName: string;
  message: string;
  upvotes: UserId[];
}

export abstract class Store {
  constructor() {}

  initRoom(roomId: string) {}

  getChats(room: string, limit: number, offset: number) {}

  addChat(
    userId: UserId,
    senderName: string,
    roomId: string,
    message: string
  ) {}

  upvote(userId: UserId, room: string, chatId: string) {}
}
