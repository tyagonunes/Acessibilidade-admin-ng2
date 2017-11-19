import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private totalPlaces;
  private totalUsers;
  private lastUser;
  private lastPlace;

  constructor(private api: ApiService, private route: Router) { }






 

  ngOnInit() {
      this.api.getLocais()
      .subscribe(response =>{
        if(response.success) {
          this.totalPlaces = response.data.length;
        }
      });

      this.api.getUsers()
      .subscribe(response =>{
        if(response.success) {
          this.totalUsers = response.data.length;
          let arrayUser = response.data;
          this.lastUser = arrayUser[arrayUser.length - 1];
          console.log(this.lastUser);
        }
      });
      
  }

}
