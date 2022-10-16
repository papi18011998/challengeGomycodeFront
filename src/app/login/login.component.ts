import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from "@angular/forms";
import {LoginService} from "../login.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any
  message!:string
  constructor(private fb:FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: this.fb.control(null),
      password: this.fb.control(null)
    })
  }

  login() {
    this.loginService.login(this.loginForm.value.login,this.loginForm.value.password).subscribe({
      next:(data)=>{
        if(data.length==0){
          this.message = 'login ou mot de passe incorrect !!!'
        }else{
          localStorage.setItem('userConnecte',JSON.stringify(data[0]))
          window.location.reload()
          this.router.navigate(['/cour'])
        }
      }
    })
  }
}
