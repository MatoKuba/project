import {
  HostBinding,
  HostListener,
  ViewChild,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
} from '@angular/core';

import { publish, Subject, takeUntil } from 'rxjs';
import { Chat } from './message-area.types';
import { QuickChatService } from './message-area.service';
import { LsnsServiceService } from '../services/lsns-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  styleUrls: ['./messages-area.component.scss'],
})
export class MessagesAreaComponent {
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
  recieverEmail: any;
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
  senderEmail: any;
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

  newInstance: any;
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
  registerForm!: FormGroup;
  groupInstance: any;

  constructor(
    private _elementRef: ElementRef,
    private _renderer2: Renderer2,
    private _ngZone: NgZone,
    private _quickChatService: QuickChatService,
    public _service: LsnsServiceService,
    private modalService: NgbModal,

    // private _scrollStrategyOptions: ScrollStrategyOptions,
    private _changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
    const PubNub = require('pubnub');

    this.newInstance = new PubNub({
      publishKey: 'pub-c-29031027-b7b0-4a25-8708-4bcf51ab90ec',
      subscribeKey: 'sub-c-779a84bd-e7ab-4bd8-862a-1da7303e6bed',
      uuid: '14',
      authKey: 'heyAuth',
    });

    this.newSecondInstance = new PubNub({
      publishKey: 'pub-c-29031027-b7b0-4a25-8708-4bcf51ab90ec',
      subscribeKey: 'sub-c-779a84bd-e7ab-4bd8-862a-1da7303e6bed',
      uuid: '14',
      authKey: 'heyAuth',
    });
    this.groupInstance = new PubNub({
      publishKey: 'pub-c-29031027-b7b0-4a25-8708-4bcf51ab90ec',
      subscribeKey: 'sub-c-779a84bd-e7ab-4bd8-862a-1da7303e6bed',
      uuid: '14',
      authKey: 'heyAuth',
    });
    const listener = {
      status: (statusEvent: any) => {
        if (statusEvent.category === 'PNConnectedCategory') {
        }
      },
      message: (messageEvent: any) => {
        this.showMessage(messageEvent.message.description);

        this.Message = messageEvent.message.description;
        this.pubChannel = messageEvent.message.publishChannel;
        console.log(this.Message, 'mm');
        console.log(this.pubChannel, 'asas');

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
        console.log(this.objectsOfChat, 'objj');

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

    //////listener 2

    const listener2 = {
      status: (statusEvent: any) => {
        if (statusEvent.category === 'PNConnectedCategory') {
        }
      },
      message: (messageEvent: any) => {
        this.MessageEvent.push(parseInt(messageEvent.message.publishChannel));

        this.Message = messageEvent.message.description;

        this._changeDetectorRef.markForCheck();
        this.newInstance.fetchMessages(
          {
            channels: [this.new_ChanelVariable],
            end: '15343325004275466',
            count: 100,
          },
          (status: any, response: any) => {
            console.log(response, 'p res');

            if (status.error === false) {
              this.getAllPreviousMessages = Object.values(response.channels);
              for (let i = 0; i < this.getAllPreviousMessages.length; i++) {
                const IndexArray = this.getAllPreviousMessages[i].filter(
                  (x: any) => x.message.publishChannel === this.senderEmail
                );
                const lastIndex = IndexArray.pop();

                this.newArray.push(lastIndex);
              }

              if (this.newArray?.length) {
                for (let i = 0; i < this.newArray.length; i++) {
                  this.channelMessageCount.push(this.newArray[i].channel);

                  this.TokenMessageCount.push(this.newArray[i].timetoken);
                }
                this.newSecondInstance.messageCounts(
                  {
                    channels: [...this.channelMessageCount],
                    channelTimetokens: [...this.TokenMessageCount],
                    uuid: `${this.senderEmail}`,
                  },
                  (status: any, results: any) => {
                    // handle status, response
                    this.messageCountsFunction(results);
                    this.messageCounts = results;
                  }
                );
              } else {
              }
            }
          }
        );
      },
      presence: (presenceEvent: any) => {
        // handle presence
        console.log(presenceEvent, 'presenceEvent');
      },
    };
    const listener3 = {
      status: (statusEvent: any) => {
        if (statusEvent.category === 'PNConnectedCategory') {
        }
      },
      message: (messageEvent: any) => {
        this.showMessage(messageEvent.message.description);

        this.Message = messageEvent.message.description;
        this.pubChannel = messageEvent.message.publishChannel;
        console.log(this.Message, 'mm');
        console.log(this.pubChannel, 'asas');

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
        console.log(this.objectsOfChat, 'objj');

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

    this.newInstance.addListener(listener);
    this.newSecondInstance.addListener(listener2);
    this.groupInstance.addListener(listener3);

    this.registerForm = this.formBuilder.group({
      // Define form controls and their initial values and validators
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.email]],

      // ...
    });
  }
  firstName: any;
  lastName: any;

  ngOnInit(): void {
    //getting userId from local storage
    this.senderEmail = localStorage.getItem('uid');
    this.firstName = localStorage.getItem('FirstName');
    this.lastName = localStorage.getItem('LastName');

    console.log(this.senderEmail, 'email');

    this._changeDetectorRef.markForCheck();
    this.objectsOfChat = this._quickChatService.objects;

    this._service.getUsers().subscribe((res) => {
      this.emails = res;
      this.chatPersons = this.emails;

      ///// checcking the messages/////////////////

      for (let i = 0; i < this.chatPersons?.length; i++) {
        const New_RecEmail = this.chatPersons[i].email;
        if (New_RecEmail > this.senderEmail) {
          var ChanelVariable = `${this.senderEmail}-${New_RecEmail}`;
          this.channelsArray.push(ChanelVariable);
        } else {
          var ChanelVariable = `${New_RecEmail}-${this.senderEmail}`;
          this.channelsArray.push(ChanelVariable);
        }
      }

      this.newSecondInstance.subscribe({
        channels: [...this.channelsArray],
      });
      this.fetchMessagesFunctionForFirstTime();
    });
  }
  //
  openModal(content: any) {
    this.modalService.open(content);
  }

  createGroup() {
    console.log(this.registerForm.value);

    var obj = {
      firstName: this.registerForm.value.firstName,
      email: this.registerForm.value.firstName + '@gmail.com',
      password: 'qwerty',
    };
    console.log(obj, 'myObj');
    this._service.registerUser(obj).subscribe((res) => {
      console.log(res, 'nw res');
      if (res) {
        this._changeDetectorRef.markForCheck();
        this.objectsOfChat;
        this.modalService.dismissAll();
      }
    });
  }
  //
  fetchMessagesFunctionForFirstTime() {
    this.newSecondInstance.fetchMessages(
      {
        channels: [...this.channelsArray],
        end: '15343325004275466',
        count: 100,
      },
      (status: any, response: any) => {
        if (status.error === false) {
          this.getAllPreviousMessages = Object.values(response.channels);
          for (let i = 0; i < this.getAllPreviousMessages.length; i++) {
            const IndexArray = this.getAllPreviousMessages[i].filter(
              (x: any) => x.message.publishChannel === this.senderEmail
            );
            const lastIndex = IndexArray.pop();
            this.newArray.push(lastIndex);
          }

          if (this.newArray.length) {
            for (let i = 0; i < this.newArray.length; i++) {
              this.channelMessageCount.push(this.newArray[i].channel);

              this.TokenMessageCount.push(this.newArray[i].timetoken);
            }
            this.newSecondInstance.messageCounts(
              {
                channels: [...this.channelMessageCount],
                channelTimetokens: [...this.TokenMessageCount],
                uuid: `${this.senderEmail}`,
              },
              (status: any, results: any) => {
                // handle status, response
                this.messageCountsFunction(results);
                this.messageCounts = results;
              }
            );
          } else {
          }
        }
      }
    );
  }

  messageCountsFunction(results: any) {
    const readCounts = results.channels;

    this.new_Object = results.channels;

    this.EnteriesObject = Object.entries(results.channels);

    this.ShowCounts = Object.values(results.channels);
  }
  GetUnreadCounts(email: any) {
    if (email > this.senderEmail) {
      var checkChannel = `${this.senderEmail}-${email}`;
    } else {
      var checkChannel = `${email}-${this.senderEmail}`;
    }
    if (this.EnteriesObject) {
      for (let i = 0; i < this.EnteriesObject.length; i++) {
        if (this.EnteriesObject[i][0] === checkChannel) {
          if (this.EnteriesObject[i][1] > 0) {
            return true && this.EnteriesObject[i][1];
          }
        }
      }
    }
  }
  notificationOnTop() {
    if (this.Message && this.pubChannel !== this.senderEmail) {
      return true;
    } else {
      return false;
    }
  }
  removeReadCountNotification(checkChannel: any) {
    if (this.EnteriesObject) {
      for (let i = 0; i < this.EnteriesObject.length; i++) {
        if (this.EnteriesObject[i][0] === checkChannel) {
          this.EnteriesObject = this.EnteriesObject.filter(
            (x: any) => x !== this.EnteriesObject[i]
          );
        }
      }
    }
  }
  // notificationOnTop() {
  //   if (this.Message && this.pubChannel !== this.senderEmail) {
  //     return true;
  //   }
  // }
  getNotification(email: any) {
    this.NotificationEmail = this.chatPersons.filter(
      (x: any) => x.email === email
    );
    this.emailRec = this.NotificationEmail[0].email;
  }
  //remove notification
  removeNotification() {
    this.Message = '';

    this.MessageEvent = this.MessageEvent.filter(
      (x: any) => x !== this.getEmail
    );
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
    console.log(messageChat);
  }

  //get message from the input and send it to the publish channel funtion
  sendMessage(value: any) {
    this.sender = value;
    console.log(this.sender);

    this.publishChannel(value);

    this.textValue = '';
  }

  // On select chat fetch messages from the pubnub storage
  //unsubscribe the chaneel first
  //create the desired channel on which you select.
  //subscribe to the channel
  //
  getNotificationTrue(mail: any) {
    for (let i = 0; i < this.MessageEvent.length; i++) {
      if (this.MessageEvent[i] === mail) {
        return mail;
      }
    }
  }
  reciverFname: any;
  recieverLname: any;
  selectChat(email: string, fname: any, lname: any): void {
    this.reciverFname = fname;
    this.recieverLname = lname;
    console.log(email);
    this.recieverEmail = email;
    // Open the panel
    this.getEmail = email;

    this.Message = '';
    this.MessageEvent = this.MessageEvent.filter((x: any) => x !== email);

    this._toggleOpened(true);

    this.newInstance.unsubscribe({
      channels: [this.new_ChanelVariable],
    });
    // this.getSelectedChat = this.chatPersons.filter(
    //   (x: any) => x.email === email
    // );

    // this.recieverEmail = this.getSelectedChat[0].email;
    // this.chatSelected = this.getSelectedChat[0];

    if (this.recieverEmail > this.senderEmail) {
      this.new_ChanelVariable = `${this.senderEmail}-${this.recieverEmail}`;
    } else {
      this.new_ChanelVariable = `${this.recieverEmail}-${this.senderEmail}`;
    }
    this.removeReadCountNotification(this.new_ChanelVariable);

    this.newInstance.subscribe({
      channels: [this.new_ChanelVariable],
    });

    this.newInstance.fetchMessages(
      {
        channels: [this.new_ChanelVariable],

        count: 100,
      },
      (status: any, response: any) => {
        // handle response

        if (status.error == false) {
          this.getPreviousMessages = Object.values(response.channels)[0];
          if (this.getPreviousMessages.length > 0) {
            this._quickChatService.objects = [];
            this.getPreviousMessages.forEach((x: any) => {
              const obj = {
                message: x.message.description,
                channel: x.channel,
                isMine: false,
                id: x.message.publishChannel,
                read: true,
              };

              this._quickChatService.objects.push(obj);
            });
            this._changeDetectorRef.markForCheck();
            this.objectsOfChat = this._quickChatService.objects.filter(
              (x: any) => x.channel == this.new_ChanelVariable
            );
          }
        }
      }
    );
  }
  //Publish Channel  ( Publish Message to the subscribed Channel)

  async publishChannel(value: any) {
    const publishPayload = {
      channel: [this.new_ChanelVariable],
      message: {
        description: value,
        publishChannel: this.senderEmail,
        isRead: true,
      },
    };
    await this.newInstance.publish(
      publishPayload,
      (status: any, response: any) => {
        console.log(status, 'ss');
        console.log(response, 'rr');

        this.responseToken = response.timetoken;
      }
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @HostBinding('class') get classList(): any {
    return {
      'quick-chat-opened': this.opened,
    };
  }
  /**
   * Select the chat
   *
   * @param id
   */

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this._quickChatService.objects = [];
  }

  open(): void {
    // Return if the panel has already opened
    if (this.opened) {
      return;
    }

    // Open the panel
    this._toggleOpened(true);
  }

  /**
   * Close the panel
   */
  close(): void {
    // Return if the panel has already closed
    if (!this.opened) {
      return;
    }

    // Close the panel
    this._toggleOpened(false);
  }

  /**
   * Toggle the panel
   */
  toggle(): void {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Show the backdrop
   *
   * @private
   */
  private _showOverlay(): void {
    // Try hiding the overlay in case there is one already opened
    this._hideOverlay();

    // Create the backdrop element
    this._overlay = this._renderer2.createElement('div');

    // Return if overlay couldn't be create for some reason
    if (!this._overlay) {
      return;
    }

    // Add a class to the backdrop element
    this._overlay.classList.add('quick-chat-overlay');

    // Append the backdrop to the parent of the panel
    this._renderer2.appendChild(
      this._elementRef.nativeElement.parentElement,
      this._overlay
    );

    // Enable block scroll strategy
    // this._scrollStrategy.enable();

    // Add an event listener to the overlay
    this._overlay.addEventListener('click', () => {
      this.close();
    });
  }

  /**
   * Hide the backdrop
   *
   * @private
   */
  private _hideOverlay(): void {
    if (!this._overlay) {
      return;
    }

    // If the backdrop still exists...
    if (this._overlay) {
      // Remove the backdrop
      // this._overlay.parentNode.removeChild(this._overlay);
      // this._overlay = null;
    }

    // Disable block scroll strategy
    // this._scrollStrategy.disable();
  }

  /**
   * Open/close the panel
   *
   * @param open
   * @private
   */
  private _toggleOpened(open: boolean): void {
    // Set the opened
    this.opened = open;

    // If the panel opens, show the overlay
    if (open) {
      this._showOverlay();
    }
    // Otherwise, hide the overlay
    else {
      this._hideOverlay();
    }
  }
}
