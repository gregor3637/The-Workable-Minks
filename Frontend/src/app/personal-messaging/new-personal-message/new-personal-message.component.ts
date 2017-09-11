import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { WebService } from './../../services/web.service';

@Component({
  selector: 'app-new-personal-message',
  templateUrl: './new-personal-message.component.html',
  styleUrls: ['./new-personal-message.component.css']
})
export class NewPersonalMessageComponent implements OnInit {
  message = {
    'from': this.auth.name,
    'to': '',
    'content': '',
    'date': ''
  };
  constructor(private webService: WebService,
    private auth: AuthService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.message.date = new Date() + '';
    console.log('new-personal-message > sendMessage > message = ' + JSON.stringify(this.message));
    
    this.webService.sendPersonalMessage(this.message);
  }
}
