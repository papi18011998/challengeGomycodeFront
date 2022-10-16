import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isUserLoggedIn()
  }
  private isUserLoggedIn():boolean{
    let userConnecte = JSON.parse(localStorage.getItem('userConnecte')!)
    if(userConnecte){
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
}
