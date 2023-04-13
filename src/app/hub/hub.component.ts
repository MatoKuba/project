import { Component } from '@angular/core';
import { Conversation} from "../common/model/conversation";
import {ConversationService} from "../common/service/conversation.service";

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent {
  conversations: Conversation[] = [];

  constructor(private conversationService: ConversationService) {}

  ngOnInit(): void {
    this.loadConversations();
  }

  loadConversations(): void {
    this.conversationService.getConversations().subscribe((conversations) => {
      this.conversations = conversations;
    });
  }

  // Add this function to your ChatRoomsComponent class
  getLastMessage(conversation: Conversation): string {
    if (conversation.messages.length > 0) {
      return conversation.messages[conversation.messages.length - 1].content;
    } else {
      return 'No messages yet';
    }
  }

}
