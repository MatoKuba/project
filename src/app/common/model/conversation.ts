import {Message} from "./message";
import {User} from "./user";


export interface Conversation {
  id: number;
  name: string;
  participants: User[];
  messages: Message[];

  title: string;
}
