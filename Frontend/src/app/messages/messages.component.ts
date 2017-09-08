import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { WebService } from './../services/web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private webService:WebService, private router:ActivatedRoute) { }

  ngOnInit(){
    var userName = this.router.snapshot.params.name;
    console.log('messages.ts > ngOnInit > name = ' + userName);
    this.webService.getMessages(userName);

    this.webService.getUser().subscribe();
  }
  
}
