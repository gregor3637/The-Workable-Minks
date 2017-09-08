import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';
import { WebService } from "../services/web.service";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  message = {
    'owner': this.auth.name,
    'text': ''
  }
  
  constructor(private webService:WebService, private auth:AuthService) { }

  ngOnInit() {
  }

  postMessage() {
    console.log('new-message > postMessage > message = ' + JSON.stringify(this.message));
    this.webService.postMessage(this.message);
  }

}
