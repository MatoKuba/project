export interface Conversation {
  id: number;
  name: string;
  participants: User[];
  messages: Message[];
}
