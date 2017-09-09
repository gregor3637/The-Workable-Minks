import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  
  getGenderStyleClass(){
    console.log('nav getGender called')
    return 'example-header-image-female';
  }
}
