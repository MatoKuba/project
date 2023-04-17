import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { ConversationService } from './common/service/conversation.service';
import { ConversationComponent } from './conversation/conversation.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HubComponent } from './hub/hub.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InviteComponent } from './invite/invite.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConversationComponent,
    HubComponent,
    MainComponent,
    InviteComponent,
  ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      RouterModule
    ],
  providers: [
    ConversationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
