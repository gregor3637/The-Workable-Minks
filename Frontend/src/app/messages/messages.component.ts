import { Component, OnInit } from '@angular/core';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = [
    {text: 'Random text', owner: 'Peshoez'},
    {text: 'Gosho text message', owner: 'Gosho'}
  ];
  
  constructor(private webService:WebService) { }

  async ngOnInit() {
    var response = await this.webService.getMessages();
    this.messages = response.json();
  }

}
