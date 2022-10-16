import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean =false
  user : any = JSON.parse(localStorage.getItem('userConnecte')!)
  constructor() { }

  ngOnInit() {
    if(this.user){
      this.isLogged = true
    }else{
      this.isLogged = false
    }
  }

}
