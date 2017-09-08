import { Component, OnInit } from '@angular/core';

import { WebService } from "../services/web.service";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  message = {
    'owner': 'newMessageAuthor',
    'text': ''
  }
  
  constructor(private webService:WebService) { }

  ngOnInit() {
  }

  postMessage() {
    console.log('new-message > postMessage > message = ' + JSON.stringify(this.message));
    this.webService.postMessage(this.message);
  }

}
