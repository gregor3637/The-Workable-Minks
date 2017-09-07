import { Component, OnInit } from '@angular/core';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {

  message = {
    owner: 'Pesho',
    text: '123'
  }
  constructor(private webService:WebService) { }


  post() {
    this.webService.postMessage(this.message);
  }

}
