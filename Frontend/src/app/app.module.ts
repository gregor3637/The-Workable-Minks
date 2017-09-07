import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebService } from './services/web.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WebService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
