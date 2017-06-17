import {Component, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  @Output() userSelected:EventEmitter<User>=new EventEmitter();
  users:User[];
  constructor( private userService:UserService) {
    this.users = userService.users;
  }

  ngOnInit() {
  }

  userClicked(user){
    this.userSelected.emit(user);
  }

}
