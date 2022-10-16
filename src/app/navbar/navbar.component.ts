import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean =false
  user : any = JSON.parse(localStorage.getItem('userConnecte')!)
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.user){
      this.isLogged = true
    }else{
      this.isLogged = false
    }
  }

  deconnexion() {
    localStorage.removeItem('userConnecte')
    this.isLogged = false
    this.router.navigateByUrl('/')
  }
}
