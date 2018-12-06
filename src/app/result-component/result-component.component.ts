import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message-service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  result:any;
  subscription: Subscription;
  constructor(private messageService:MessageService) { }

  ngOnInit() {

    this.subscription = this.messageService.getMessage().subscribe(result => {
       this.result = result.text;
    });
  }

}
