import { Component } from '@angular/core';
import {User} from "./classes/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser:User;

  userChosen(user){
    console.log(user);
    this.currentUser=user;

  }
}
