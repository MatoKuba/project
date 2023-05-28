import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Chat } from '../messages-area/message-area.types';
import { QuickChatService } from '../messages-area/message-area.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  newInstance: any;
  senderEmail: any = '14-15';
  @ViewChild('messageInput') messageInput!: ElementRef;
  // chat: Chat;
  // chats: Chat[];
  opened: boolean = false;
  selectedChat!: Chat;
  chanelVariable1: any;
  // private _scrollStrategy: ScrollStrategy =
  //     this._scrollStrategyOptions.block();
  private _overlay!: HTMLElement;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  chanelVariable: any;
  timeToken: any;
  timeStampToken: any;
  RecieveArray: any = [];
  senderArray: any[] = [];
  MessageButton: any;
  sender: any;
  textValue: any;
  showHtml: any;
  PBchat: any[] = [];
  recToken: any;
  getSelectedChat: any;
  recieverEmail: any = '15-14';
  new_ChanelVariable: any;
  chatSelected: any;
  getPreviousMessages: any;
  getResponseOfPB: any;
  showMessageChannel: any;
  responseToken: any;
  messages: string[] = [];
  pubNubChat: any[] = [];
  emails: any;
  chatPersons: any;
  ressp: any;
  objectsOfChat: any;
  MessageEvent: any = [];
  Message: any;
  NotificationEmail: any;
  emailRec: any;
  noti: boolean = true;
  channelsArray: any = [];
  firstInstance: any;
  newSecondInstance: any;
  newnewSecondInstance: any;

  read!: boolean;
  getAllPreviousMessages: any;
  getAllKeys: any;
  newArray: any = [];
  channelMessageCount: any = [];
  TokenMessageCount: any = [];
  messageCounts: any;
  splitArray = [];
  new_Object: any;
  EnteriesObject: any;
  ShowCounts: any;
  pubChannel: any;
  /**
   * Constructor
   */
  httpResponse: any;
  subscribedChannel: any;
  setMemArray: any = [];
  getEmail: any;
  SignINTOken: any = localStorage.getItem('token');
  FirstName: any;
  LastName: any;
  email: any;
  uplodePicture: any;
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _quickChatService: QuickChatService
  ) {
    const PubNub = require('pubnub');

    this.newInstance = new PubNub({
      publishKey: 'pub-c-2baf586a-68d1-4b8a-9124-0f5db3199b9b',
      subscribeKey: 'sub-c-996f5684-59f9-11ea-9a59-eab2515ceb0d',
      uuid: `${this.senderEmail}`,
      authKey: 'heyAuth',
    });
    // listener

    const listener = {
      status: (statusEvent: any) => {
        if (statusEvent.category === 'PNConnectedCategory') {
        }
      },
      message: (messageEvent: any) => {
        this.showMessage(messageEvent.message.description);

        this.Message = messageEvent.message.description;
        this.pubChannel = messageEvent.message.publishChannel;
        this._changeDetectorRef.markForCheck();

        const obj = {
          message: messageEvent.message.description,
          channel: this.new_ChanelVariable,
          isMine: false,
          id: messageEvent.message.publishChannel,
          read: this.read,
        };

        this._quickChatService.objects.push(obj);
        this.objectsOfChat = this._quickChatService.objects.filter(
          (x: any) => x.channel == this.new_ChanelVariable
        );

        this._changeDetectorRef.markForCheck();
      },
      presence: (presenceEvent: any) => {
        // handle presence
        console.log(presenceEvent, 'presenceEvent');
      },
      objects: (objectEvent: any) => {
        console.log(objectEvent, 'objectEvent');
      },
    };
  }

  // show messages from reciever.
  showMessage(value: any) {
    const messageChat = {
      isMine: false,
      text: value,
      channel: this.new_ChanelVariable,
      id: this.sender,
      token: this.timeToken,
      timeStamp: this.timeStampToken,
    };
  }
}
