import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../conversation';
import { ConversationService } from '../conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  @Input() conversationId!: number;
  conversation: Conversation | null = null;
  messageText: string = '';

  constructor(private conversationService: ConversationService) { }

  ngOnInit(): void {
    this.conversationService.getConversation(this.conversationId).subscribe(conversation => {
      this.conversation = conversation;
    });
  }

  sendMessage(): void {
    if (this.conversation && this.messageText) {
      this.conversationService.sendMessage(this.conversation.id, 'User', this.messageText)
        .subscribe(() => {
          // clear the message text input
          this.messageText = '';
          // refresh the conversation
          this.conversationService.getConversation(this.conversationId).subscribe(conversation => {
            this.conversation = conversation;
          });
        });
    }
  }
}
