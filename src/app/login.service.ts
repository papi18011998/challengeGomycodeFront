import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  login(login:string,password:string): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}utilisateur?login=eq.${login}&password=eq.${password}&select=*`)
  }
}
