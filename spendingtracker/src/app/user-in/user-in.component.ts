import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-in',
  templateUrl: './user-in.component.html',
  styleUrls: ['./user-in.component.css']
})
export class UserInComponent implements OnInit {
  usernames: any;
  userid = "";

  constructor( private usersService: UsersService, private router: Router) { }

  async ngOnInit() {
    this.usernames = await this.usersService.getUsers();
  }

async selectUser(){
  let response: any;
  response = await this.usersService.selectUser(this.userid);
  
  if(response){
    this.router.navigate(['/balance']);
  }
}

}
