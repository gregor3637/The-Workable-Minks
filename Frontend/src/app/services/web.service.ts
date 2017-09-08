import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:1234/api';
  messages = [];

  constructor(private http:Http, private sb:MdSnackBar) {
    this.getMessages();
  }

  async getMessages(){ 
    try {
      var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
      this.messages = response.json();
    } catch (error) {
      this.handleErrors('unable to get messages');
    }
  }

  async postMessage(message) {
    try {
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messages.push(response.json());
    } catch (error) {
      this.handleErrors('unable to post messages');
    }
  }

  private handleErrors(error) {
      this.sb.open(error, 'close', {duration: 4000});
  }
}
