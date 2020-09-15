import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ { path: "", component : HomeComponent },
{ path: "myhome", component : HomeComponent },
{ path: "contact", component : ContactComponent },
{ path: "dashboard", canActivate : [AuthGuard] , component: DashboardComponent },
{ path: "login", component : LoginComponent },
{ path: "lazy1", loadChildren: 'app/lazy/lazy.module#LazyModule' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
