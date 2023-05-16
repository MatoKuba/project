import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';
import {HubComponent} from "./hub/hub.component";
import {MainComponent} from "./main/main.component";
import {InviteComponent} from "./invite/invite.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {RegisterPageComponent} from "./register/register-page/register-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'conversation/:id', component: ConversationComponent },
  { path: 'hub', component: HubComponent},
  { path: 'main', component: MainComponent},
  { path: 'invite', component: InviteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
