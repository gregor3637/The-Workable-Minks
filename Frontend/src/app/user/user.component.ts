import { Component, OnInit } from '@angular/core';

import { WebService } from './../services/web.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  model = {
    firstName: '',
    lastName: ''
  }
  
  constructor(private webService:WebService) { }

  ngOnInit() {
    this.webService.getUser().subscribe((res) => {
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    });
  }

  updateUserData() {
    //Todo: angular materials notification when we change the data
    this.webService.saveUser(this.model).subscribe();
  }
}
