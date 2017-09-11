import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './../../services/web.service';

@Component({
  selector: 'app-read-personal-message',
  templateUrl: './read-personal-message.component.html',
  styleUrls: ['./read-personal-message.component.css']
})
export class ReadPersonalMessageComponent implements OnInit {
  public msgs = [];
  constructor(public webService: WebService, private router: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    const userName = this.router.snapshot.params.name;
    console.log('messages.ts > ngOnInit > name = ' + userName);
    this.webService.getPersonalMessages(userName);

    this.webService.getUser().subscribe();
  }
}
