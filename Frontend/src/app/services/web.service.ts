import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WebService {
  private BASE_URL = 'http://localhost:1234/api';
  private messageStore = [];
  private messageSubject = new Subject();
  public messagesObservable = this.messageSubject.asObservable();

  public personalMessageStore;
  private personalMessageSubject = new Subject();
  public personalMessagesObservable = this.personalMessageSubject.asObservable();

  constructor(private http: Http, private sb: MdSnackBar, private auth: AuthService) {
    this.getMessages('');
  }

  getMessages(user) {
    console.log('web.ts > getMessages > user = ' + user);
    user = (user)
      ? '/' + user
      : '';
    console.log('web.ts > getMessages > user = ' + user);

    this.http.get(this.BASE_URL + '/messages' + user).subscribe((response) => {
      this.messageStore = response.json();
      this.messageSubject.next(this.messageStore);
    }, (error) => {
      this.handleErrors('unable to get messages');
    });
  }

  getPersonalMessages(user) {
    user = (user)
      ? '/' + user
      : '';

    this.http.get(this.BASE_URL + '/personal-messages' + user).subscribe((response) => {
      this.personalMessageStore = response.json();
      this.personalMessageSubject.next(this.personalMessageStore);
    }, (error) => {
      this.handleErrors('unable to get personal messages');
    });
  }

  async postMessage(message) {
    try {
      const response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messageStore.push(response.json());
      this.messageSubject.next(this.messageStore);
    } catch (error) {
      this.handleErrors('unable to post messages');
    }
  }

  getUser() {
    return this.http
      .get(this.BASE_URL + '/users/me', this.auth.tokenHeader)
      .map((res) => {
        return res.json();
      });
  }

  saveUser(userData) {
    return this.http
      .post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader)
      .map((res) => {
        return res.json();
      });
  }

  async sendPersonalMessage(message) {
    try {
      const response = await this.http.post(this.BASE_URL + '/personal-messages', message).toPromise();
      this.personalMessageStore.push(response.json());
      this.personalMessageSubject.next(this.personalMessageStore);
      console.log(this.personalMessagesObservable);
    } catch (error) {
      this.handleErrors('unable to send message');
    }
  }

  public handleErrors(error) {
      this.sb.open(error, 'close', {duration: 4000});
  }
}
