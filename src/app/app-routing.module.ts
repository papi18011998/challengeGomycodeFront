import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './Apropos/Apropos.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path :'apropos',component:AproposComponent},
  {path:'cour', component:CourComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
