import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users;
  constructor(private api:ApiService) { }


  deleteUser(user) 
  {
    console.log(user._id);
    //  this.api.removeUser(user._id)
    //   .subscribe(response =>{
    //       console.log(response);
    //   }, erro => console.log(erro));  
  }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(response => {
      console.log(response);
      if(response.success) {
        this.users = response.data;
      }
    }, erro => console.log(erro));
  }

}
