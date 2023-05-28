import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  BehaviorSubject,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Chat, pbChat } from './message-area.types';

@Injectable({
  providedIn: 'root',
})
export class QuickChatService {
  objects: {
    message: string;
    channel: number;
    isMine: boolean;
    id: number;
    read: boolean;
  }[] = [];
  private _chat: BehaviorSubject<Chat> = new BehaviorSubject<any>(null);
  private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject<any>(null);
  public pubNubChat: BehaviorSubject<pbChat[]> = new BehaviorSubject<any>(null);

  userId = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for chat
   */
  get chat$(): Observable<Chat> {
    return this._chat.asObservable();
  }

  /**
   * Getter for chat
   */
  get chats$(): Observable<Chat[]> {
    return this._chats.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get chats
   */
  getChats(): Observable<any> {
    return this._httpClient.get<Chat[]>('api/apps/chat/chats').pipe(
      tap((response: Chat[]) => {
        this._chats.next(response);
      })
    );
  }

  getUsersEmail() {
    let token = localStorage.getItem('token');
    const headers_object = new HttpHeaders({ token: 'token' });
    const httpOptions = {
      headers: headers_object,
    };
    return this._httpClient.get(
      'https://67vk4afxrk.execute-api.us-east-1.amazonaws.com/getEmails',

      httpOptions
    );
  }

  /**
   * Get chat
   *
   * @param id
   */
  getChatById(id: string): Observable<any> {
    return this._httpClient
      .get<Chat>('api/apps/chat/chat', { params: { id } })
      .pipe(
        map((chat) => {
          // Update the chat
          this._chat.next(chat);

          // Return the chat
          return chat;
        }),
        switchMap((chat) => {
          if (!chat) {
            return throwError('Could not found chat with id of ' + id + '!');
          }

          return of(chat);
        })
      );
  }
}
