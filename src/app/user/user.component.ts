import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string, age: number};
  isLoggedIn = false;
  data: string;

  constructor(private usersService: UsersService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.usersService.user;

    this.dataService.getDetails().then((data: string) => this.data = data);
  }

}
