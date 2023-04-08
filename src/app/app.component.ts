import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {Message} from "./common/model/message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private destroy$ = new Subject<void>();
  messages: Message[] = [];
  newMessage: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.http.get<Message[]>('/api/messages')
      .pipe(takeUntil(this.destroy$))
      .subscribe(messages => {
        this.messages = messages;
      });
  }

  sendMessage() {
    const message = {
      user: 'Anonymous',
      text: this.newMessage
    };
    this.http.post('/api/messages', message)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getMessages();
        this.newMessage = '';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
