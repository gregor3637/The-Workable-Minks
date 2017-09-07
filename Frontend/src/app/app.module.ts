import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebService } from './services/web.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SidebarComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WebService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
