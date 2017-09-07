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
    try {
      var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
      this.messages = response.json();
      return response;
    } catch (error) {
      this.handleError('Unable to get messages');
    }
  }

  async postMessage(message) {
    try {
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messages.push(response.json());
      return response;
    } catch (error) {
      this.handleError('Unable to post messages');
    }
  }
  
  private handleError(error) {
    alert(error);
  }
}
