import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private totalPlaces: number;
  private totalUsers: number;
  private lastUserName;
  private lastUserDate;
  private lastPlaceName;
  private lastPlaceDate;

  constructor(private api: ApiService, private route: Router) { }






 

  ngOnInit() {
      this.api.getLocais()
      .subscribe(response =>{
        if(response.success) {
          this.totalPlaces = response.data.length;
          let arrayPLaces = response.data;
          let lastPlace = arrayPLaces[arrayPLaces.length - 1];
          this.lastPlaceName = lastPlace.nome;
          this.lastPlaceDate = lastPlace.criacao;
        }
      });

      this.api.getUsers()
      .subscribe(response =>{
        if(response.success) {
          this.totalUsers = response.data.length;
          let arrayUser = response.data;
          let lastUser = arrayUser[arrayUser.length - 1];
          this.lastUserName = lastUser.nome;
          this.lastUserDate = lastUser.criacao;
        }
      });
      
  }

}
