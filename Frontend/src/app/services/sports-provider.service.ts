import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Rx'

@Injectable()
export class SportsProviderService {
  private BASE_URL = 'http://localhost:1234/api';
  public sports = ['football', 'basketball', 'volleyball'];
  private subject = new Subject();

  constructor(private http:Http, private sb:MdSnackBar) {
  }

}
