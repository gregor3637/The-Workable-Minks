import { Component, OnInit } from '@angular/core';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  
  constructor(private webService:WebService) { }

  ngOnChanges(...args: any[]) {
        console.log('onChange fired');
        console.log('changing', args);
  }
}
