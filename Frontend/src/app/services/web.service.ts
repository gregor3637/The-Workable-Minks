import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx'

@Injectable()
export class WebService {
  private BASE_URL = 'http://localhost:1234/api';
  private messageStore = [];
  private messageSubject = new Subject();
  public messagesObservable = this.messageSubject.asObservable();

  constructor(private http:Http, private sb:MdSnackBar) {
    this.getMessages('');
  }

  getMessages(user){ 
    console.log('web.ts > getMessages > user = ' + user);
    user = (user)
      ? '/' + user
      : '';
    console.log('web.ts > getMessages > user = ' + user);

    this.http.get(this.BASE_URL + '/messages' + user).subscribe((response) => {
      this.messageStore = response.json();
      this.messageSubject.next(this.messageStore);
    },(error) => {
      this.handleErrors('unable to get messages');
    });
  }

  async postMessage(message) {
    try {
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messageStore.push(response.json());
      this.messageSubject.next(this.messageStore);
    } catch (error) {
      this.handleErrors('unable to post messages');
    }
  }

  private handleErrors(error) {
      this.sb.open(error, 'close', {duration: 4000});
  }
}
