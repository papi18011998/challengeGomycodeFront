import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './Apropos/Apropos.component';
import { CourComponent } from './cour/cour.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [						
    AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      AproposComponent,
      CourComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
