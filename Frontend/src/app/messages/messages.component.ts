import { Component, OnInit } from '@angular/core';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // messages = [
  // ]
  constructor(private webService:WebService) { }

  // async ngOnInit() {
  //   var response = await this.webService.getMessages();
  //   console.log( response)
  //   // this.messages = result.json();
  // }

}
