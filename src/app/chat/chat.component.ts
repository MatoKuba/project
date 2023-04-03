import { Component, OnInit } from '@angular/core';
import { Conversation } from '../conversation';
import { AuthService } from '../auth.service';
import { ConversationService } from '../conversation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  conversations: Conversation[];
  selectedConversation: Conversation;
  currentUser = this.authService.currentUserValue;
  message: string;

  constructor(private authService: AuthService, private conversationService: ConversationService) {}

  ngOnInit() {
    this.getConversations();
  }

  getConversations(): void {
    this.conversationService.getConversations().subscribe(conversations => {
      this.conversations = conversations;
      if (this.conversations.length > 0) {
        this.selectConversation(this.conversations[0]);
      }
    });
  }

  selectConversation(conversation: Conversation): void {
    this.selectedConversation = conversation;
  }

  onSubmit(): void {
    this.conversationService.sendMessage(this.selectedConversation.id, this.currentUser.username, this.message).subscribe(() => {
      this.selectedConversation.messages.push({ from: this.currentUser.username, text: this.message, timestamp: new Date() });
      this.message = '';
    });
  }
}
