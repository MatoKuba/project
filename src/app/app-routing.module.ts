import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HubComponent} from "./hub/hub.component";
import {MainComponent} from "./main/main.component";
import {InviteComponent} from "./invite/invite.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
