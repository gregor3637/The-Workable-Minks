import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  private showSports = false;
  constructor(public auth: AuthService) { }

  testSports = [
    'box',
    'box',
    'box',
    'box'
  ];

  ngOnInit() {
  }

  getGenderStyleClass() {
    console.log('nav getGender called');
    return 'example-header-image-female';
  }

  isSportsActive() {
    console.log('nav.ts > isSportsActive = ' + this.showSports);
    return this.showSports;
  }

  changeSubSportsVisibility() {
    this.showSports = !this.showSports;
    console.log('nav.ts > changeSubSportsVisibility > showSports = ' + this.showSports);
  }

  ngOnChanges() {
    console.log('nav.ts > ngOnChanges ');
  }
}
