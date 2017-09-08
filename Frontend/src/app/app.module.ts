import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { WebService } from './services/web.service';

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
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
     ,RouterModule.forRoot(routes)
  ],
  providers: [
    WebService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
