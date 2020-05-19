import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = {
    name: 'Youssef',
    age : 26
  };

  getUsers() : Observable<{name : string, age : number}>{
    return of(this.user);
  }
  constructor() { }
}
