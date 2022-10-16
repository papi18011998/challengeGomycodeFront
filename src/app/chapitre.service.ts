import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor(private httpClient: HttpClient) { }
  FindChapitreById(id:number){
    return this.httpClient.get<any>(`${environment.apiURL}chapitres?cours_id=eq.${id}&select=*`)
  }
}
