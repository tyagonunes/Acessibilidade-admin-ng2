import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  private places;
  
    constructor(private api: ApiService, private route: Router) { }
  
    viewPlace(place) {
      
      localStorage.setItem('place', JSON.stringify(place));
      this.route.navigate(['view'])
    }
  
  
    ngOnInit() {
        this.api.getLocais()
        .subscribe(response => {
          if(response.success) {
            this.places = response.data;
          }
          
        }, error => alert(error));
    }

}
