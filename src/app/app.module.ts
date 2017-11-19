import { FilterPipe } from './pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api.service';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { LOCALE_ID } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditLocalComponent } from './edit-local/edit-local.component';
import { ViewLocalComponent } from './view-local/view-local.component';
import { NgModel } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EditLocalComponent,
    ViewLocalComponent,
    FilterPipe,
    NavbarComponent,
    UsersComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ApiService, FilterPipe, {provide: LOCALE_ID, useValue: "pt-BR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
