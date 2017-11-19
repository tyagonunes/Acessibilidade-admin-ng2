import { EditLocalComponent } from './edit-local/edit-local.component';
import { ViewLocalComponent } from './view-local/view-local.component';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LocalComponent } from './local/local.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent},
    { path: 'view', component: ViewLocalComponent },
    { path: 'edit', component: EditLocalComponent},
    { path: 'users', component: UsersComponent},
    { path: 'local', component: LocalComponent},


    { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(appRoutes)