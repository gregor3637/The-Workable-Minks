import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NewPersonalMessageComponent } from './personal-messaging/new-personal-message/new-personal-message.component';
import { PersonalMessagingModule } from "./personal-messaging/personal-messaging.module";
import { ReadPersonalMessageComponent } from './personal-messaging/read-personal-message/read-personal-message.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SportsProviderService } from './services/sports-provider.service';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { UserComponent } from './user/user.component';
import { UserMessagesComponent } from './user/user-messages/user-messages.component';

// import { PersonalMessagingModule } from './personal-messaging/personal-messaging.module';


// import { PersonalMessagingRoutingModule } from './personal-messaging/personal-messaging-routing.module';


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
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MaterialModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
    ,CoreModule
    ,PersonalMessagingModule
    // ,RouterModule.forRoot(routes),
    // PersonalMessagingModule
  ],
  providers: [
    SportsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
