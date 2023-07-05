import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetNotesComponent } from './components/get-notes/get-notes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authguard } from './components/guard/authguard.guard';
const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
children:[{path:'getnotes',component:GetNotesComponent ,canActivate:[authguard]}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
