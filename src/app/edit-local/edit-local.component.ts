import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-local',
  templateUrl: './edit-local.component.html',
  styleUrls: ['./edit-local.component.css']
})
export class EditLocalComponent implements OnInit {

  private place;

  private tipos = [
    {value:'1', tipo: 'Local com acessibilidade'},
    {value:'2', tipo: 'Local com acesso dificultado'},
    {value:'3', tipo: 'Instituição de apoio a deficientes'},
  ]
  
  constructor(private api:ApiService, private route: Router) {
      this.place = JSON.parse(localStorage.getItem('place'));
      
   }



   putLocal() {
     console.log(this.place);
     
     this.api.editLocal(this.place)
     .subscribe(response => {
       this.route.navigate(['local']);
     })
   }

  ngOnInit() {
  }

}
