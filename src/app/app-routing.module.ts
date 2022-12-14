import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './Apropos/Apropos.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AuthGuard} from "./auth.guard";
import {DetailsCoursComponent} from "./details-cours/details-cours.component";
import { CorrigerComponent } from './corriger/corriger.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { JavascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path :'apropos',component:AproposComponent},
  {path:'cour', component:CourComponent,canActivate:[AuthGuard]},
  {path:'cour/:id', component:DetailsCoursComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'nav-bar',component:NavbarComponent},
  {path:'corriger',component:CorrigerComponent},
  {path:'challenge',component:ChallengeComponent},
  {path:'jschallenge', component:JavascriptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
