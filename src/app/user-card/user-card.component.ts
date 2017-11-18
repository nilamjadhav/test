import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserCardService } from './user-card.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  providers: [UserCardService]
})

export class UserCardComponent implements OnInit {

  @Output() notify = new EventEmitter();

  constructor(public _userCardService: UserCardService,
    public _router: Router) { }
  userData: any = []
  ngOnInit() {
    this._userCardService.getData().
      subscribe(res => {
        this.userData = res;
      });
  }

  getTodoDetails(userId) {
    this._userCardService.getToDoData(userId).
      subscribe(res => {
        this._router.navigateByUrl('/user-toDo/' + userId);
        this.notify.emit(userId);
      });

  }
}
