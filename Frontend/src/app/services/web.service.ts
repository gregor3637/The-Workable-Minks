import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';

@Injectable()
export class WebService {

  constructor(private http:Http) { 

  }

  async getMessages() {
    var response = await this.http.get('http://localhost:1234/messages').toPromise();

    return response;
  }
}
