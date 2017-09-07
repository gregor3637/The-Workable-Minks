import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebService } from './services/web.service';

var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SidebarComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    ,RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
