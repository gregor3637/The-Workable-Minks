import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
