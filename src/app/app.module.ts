import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationService } from './conversation.service';
import { ConversationComponent } from './conversation/conversation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    ConversationComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [
    ConversationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
