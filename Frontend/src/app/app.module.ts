import { NewPersonalMessageComponent } from './personal-messaging/new-personal-message/new-personal-message.component';
import { ReadPersonalMessageComponent } from './personal-messaging/read-personal-message/read-personal-message.component';
// import { PersonalMessagingModule } from './personal-messaging/personal-messaging.module';
import { UserMessagesComponent } from './user/user-messages/user-messages.component';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WebService } from './services/web.service';
import { SportsProviderService } from './services/sports-provider.service';
import { TitleCasePipe } from './pipes/title-case.pipe';
// import { PersonalMessagingRoutingModule } from './personal-messaging/personal-messaging-routing.module';

var routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'messages',
    component:MessagesComponent
  },
  {
    path: 'messages/:name',
    component:MessagesComponent
  },
  {
    path: 'personal-messages',
    component:ReadPersonalMessageComponent
  },
  {
    path: 'personal-messages/:name',
    component:ReadPersonalMessageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    UserMessagesComponent,
    TitleCasePipe,
    ReadPersonalMessageComponent,
    NewPersonalMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MaterialModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    // PersonalMessagingModule
  ],
  providers: [
    WebService,
    AuthService,
    SportsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
