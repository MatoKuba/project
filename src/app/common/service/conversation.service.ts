import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversation } from '../model/conversation';
import {Message} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getConversation(id: number): Observable<Conversation> {
    return this.http.get<Conversation>(`${this.API_URL}/conversations/${id}`);
  }

  sendMessage(conversationId: number, message: string): Observable<Message> {
    return this.http.post<Message>(`${this.API_URL}/${conversationId}/messages`, { message });
  }
}
