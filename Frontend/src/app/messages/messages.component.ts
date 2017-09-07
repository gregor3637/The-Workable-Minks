import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }

}
