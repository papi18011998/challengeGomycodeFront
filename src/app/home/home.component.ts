import { Component, OnInit } from '@angular/core';
import {CoursService} from "../cours.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses:any
  constructor(private coursService: CoursService) { }
  ngOnInit() {
    this.allCourses()
  }
  allCourses(){
    this.coursService.allCourses().subscribe({
      next:(data)=>{
        this.courses = data
      }
    })
  }
}
