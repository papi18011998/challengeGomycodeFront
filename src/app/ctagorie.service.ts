import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CtagorieService {

  constructor(private httpClient: HttpClient) { }
  findCategorieById(id:number){
    return this.httpClient.get<any>(`${environment.apiURL}categories?id=eq.${id}&select=*`)
  }
}
