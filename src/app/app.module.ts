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
import { DetailsCoursComponent } from './details-cours/details-cours.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorInterceptor} from "./interceptor.interceptor";
import {AuthGuard} from "./auth.guard";
import { CorrigerComponent } from './corriger/corriger.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PhpComponent } from './php/php.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      AproposComponent,
      CourComponent,
      ContactComponent,
      DetailsCoursComponent,
      LoginComponent,
      CorrigerComponent,
      ChallengeComponent,
      JavascriptComponent,
      PhpComponent
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTabsModule
    ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorInterceptor,multi:true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
