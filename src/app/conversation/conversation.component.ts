import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversation } from '../common/model/conversation';
import { ConversationService } from '../common/service/conversation.service';
import { Message } from '../common/model/message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  conversation?: Conversation;
  messageText = '';

  @ViewChild('messageInput') messageInput!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conversationService: ConversationService
  ) {}

  ngOnInit(): void {
    this.loadConversation();
  }

  loadConversation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conversationService.getConversation(id).subscribe((conversation: Conversation) => {
      this.conversation = conversation;
    });
  }

  goBack(): void {
    this.router.navigate(['/hub']);
  }

  adjustTextareaHeight(): void {
    if (this.messageInput) {
      const textarea = this.messageInput.nativeElement;
      textarea.style.height = '1px';
      const newHeight = Math.min(textarea.scrollHeight, 80); // Limit to 4 lines (20px per line)
      textarea.style.height = newHeight + 'px';
    }
  }

  sendMessage(): void {
    if (this.messageText.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        senderId: 1,
        content: this.messageText.trim(),
        timestamp: new Date(),
      };

      this.conversation?.messages.push(newMessage);
      this.messageText = '';
      this.adjustTextareaHeight();
      this.adjustTextareaHeight(); // Call it again to reset the height to 1 line
    }
  }

  getSenderName(senderId: number): string {
    const participant = this.conversation?.participants.find((p) => p.id === senderId);
    return participant ? participant.name : 'Unknown';
  }

  getMessageSenderName(message: Message): string {
    const sender = this.conversation?.participants.find((participant) => participant.id === message.senderId);
    return sender?.name ?? '';
  }

  isFirstMessage(index: number): boolean {
    if (index === 0 || (this.conversation?.participants?.length ?? 0) > 2) {
      return true;
    }
    const prevMessage = this.conversation?.messages[index - 1];
    return prevMessage?.senderId !== this.conversation?.messages[index]?.senderId;
  }

  shouldShowDate(index: number): boolean {
    if (index === 0) {
      return true;
    }
    const currentDate = new Date(this.conversation?.messages[index]?.timestamp ?? new Date()).toDateString();
    const prevDate = new Date(this.conversation?.messages[index - 1]?.timestamp ?? new Date()).toDateString();
    return currentDate !== prevDate;
  }

  updateConversationTitle(newTitle: string): void {
    if (this.conversation) {
      this.conversation.title = newTitle.trim();
    }
  }
}
