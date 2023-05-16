import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConversationService } from './common/service/conversation.service';
import { ConversationComponent } from './conversation/conversation.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HubComponent } from './hub/hub.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InviteComponent } from './invite/invite.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { RegisterPageComponent } from './register/register-page/register-page.component';
import {_MatCheckboxRequiredValidatorModule, MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    HubComponent,
    MainComponent,
    InviteComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterFormComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    _MatCheckboxRequiredValidatorModule,
    MatCheckboxModule
  ],
  providers: [
    ConversationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
