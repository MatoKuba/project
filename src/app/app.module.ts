import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationService } from './common/service/conversation.service';
import { ConversationComponent } from './conversation/conversation.component';
import { HttpClientModule } from "@angular/common/http";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    ConversationComponent,
    MessagesComponent,
  ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
  providers: [
    ConversationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
