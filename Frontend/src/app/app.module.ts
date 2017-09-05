import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
