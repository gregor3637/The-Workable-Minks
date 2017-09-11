import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { WebService } from './../../services/web.service';

@Component({
  selector: 'app-read-personal-message',
  templateUrl: './read-personal-message.component.html',
  styleUrls: ['./read-personal-message.component.css']
})
export class ReadPersonalMessageComponent {
  _messages = [];
  @Input() set msgs(val){
    console.log('=======================================');
    console.log(val);
    console.log('=======================================');
    this._messages = val;
  }
}
