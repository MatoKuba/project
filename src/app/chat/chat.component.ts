import { Component, OnInit } from '@angular/core';
import { Conversation } from '../common/model/conversation';
import { AuthService } from '../common/service/auth.service';
import { ConversationService } from '../common/service/conversation.service';
import { Message } from '../common/model/message';
import {User} from "../common/model/user";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string = '';

  conversations: Conversation[] = [];
  selectedConversation!: Conversation;
  currentUser: User = this.authService.currentUserValue;


  constructor(private authService: AuthService, private conversationService: ConversationService) {}

  ngOnInit() {
    this.getConversations();
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  getConversations(): void {
    this.conversationService.getConversation(this.conversations.length).subscribe(conversations => {
      this.conversations = [conversations];
      if (this.conversations.length > 0) {
        this.selectConversation(this.conversations[0]);
      }
    });
  }

  selectConversation(conversation: Conversation): void {
    this.selectedConversation = conversation;
  }

  onSubmit(): void {
    const newMessage: { from: any; content: string; timestamp: Date } = {
      from: this.currentUser.name,
      content: this.message,
      timestamp: new Date()
    };
    this.selectedConversation.messages.push(<Message>newMessage);
    this.message = '';
    this.conversationService.sendMessage(this.selectedConversation.id, this.message).subscribe();
  }
}
