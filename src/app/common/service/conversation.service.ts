import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Conversation } from '../model/conversation';
import {Message} from "../model/message";
import {MOCK_CONVERSATIONS} from "../../mock/mock-conversations";

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getConversations(): Observable<Conversation[]> {
    return of(MOCK_CONVERSATIONS);
  }

  // Change the return type here to Observable<Conversation>
  getConversation(id: number): Observable<Conversation> {
    const conversation = MOCK_CONVERSATIONS.find((c) => c.id === id);
    return of(conversation as Conversation);
  }

  sendMessage(conversationId: number, message: string): Observable<Message> {
    return this.http.post<Message>(`${this.API_URL}/${conversationId}/messages`, { message });
  }
}
