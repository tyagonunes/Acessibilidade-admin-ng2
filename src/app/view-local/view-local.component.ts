import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-local',
  templateUrl: './view-local.component.html',
  styleUrls: ['./view-local.component.css']
})
export class ViewLocalComponent implements OnInit {

  private place;

  constructor(private api: ApiService, private route: Router) { 
    
  }

  deletePlace(id) {

    this.api.removeLocal(id)
    .subscribe(response => {
      this.route.navigate(['local']);
    })
  }

  editPlace(place) {
    localStorage.setItem('place', JSON.stringify(place));
    this.route.navigate(['edit']);
  }


  ngOnInit() {
    this.place = JSON.parse(localStorage.getItem('place'));
  }

  onDestroy () {
    localStorage.removeItem('place')
  }
}
