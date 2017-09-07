import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:1234/api';
  messages = [];

  constructor(private http:Http) { 
    this.getMessages();
  }

  async getMessages() {
    var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
    this.messages = response.json();
    return response;
  }

  async postMessage(message) {
    var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
    this.messages.push(response.json());
    return response;
  }
}
