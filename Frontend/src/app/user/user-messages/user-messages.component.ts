import { Component, OnInit } from '@angular/core';
import { WebService } from './../../services/web.service';
import { ActivatedRoute } from '@angular/router';
import { SportsProviderService } from './../../services/sports-provider.service';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css'],
})
export class UserMessagesComponent implements OnInit {
  public model = {
    messages: []
  };
  sports = this.sportsProvider.sports;

  constructor(private webService: WebService,
    private sportsProvider: SportsProviderService) { }

    ngOnInit() {
      this.webService.getUser().subscribe((res) => {
        // filter here
        this.model.messages = res.messages;
      });
    }
}
