
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';
import { WebService } from './../services/web.service';
import { SportsProviderService } from './../services/sports-provider.service';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  sports = ['123'];
  message = {
    'owner': this.auth.name,
    'text': '',
    'sport': ''
  };
  constructor(private webService: WebService,
    private auth: AuthService,
    private sportsProvider: SportsProviderService) { }

  ngOnInit() {
    this.sports = this.sportsProvider.sports;
  }

  postMessage() {
    console.log('new-message > postMessage > message = ' + JSON.stringify(this.message));
    this.webService.postMessage(this.message);
  }
}
