import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private  httpClient:HttpClient) { }
  allCourses(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}cours`)
  }
  courseDetails(id:number){
    return this.httpClient.get<any>(`${environment.apiURL}cours?id=eq.${id}&select=*`)
  }

}
