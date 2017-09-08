import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:1234/auth';
  constructor(private http:Http) { }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe();
  }
}
