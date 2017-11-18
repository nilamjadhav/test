import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class UserCardService {

  constructor(public _http: Http) { }

  // getUserData() {
  //   return this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
  //   });
  // }


  // getUserDataAsset() {
  //   return this._http.get('users.json').subscribe(res => {
  //   });
  // }

  getData() {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
      .map((res: Response) => res.json());
  }
   getToDoData(data) {
    return this._http.get('https://jsonplaceholder.typicode.com/todos?userId='+data)
      .map((res: Response) => res.json());
  }

}
