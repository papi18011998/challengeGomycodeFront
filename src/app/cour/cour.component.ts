import { Component, OnInit } from '@angular/core';
import {CoursService} from "../cours.service";

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
  courses:any
  constructor(private courseService: CoursService) { }

  ngOnInit() {
    this.listCourses()
  }
  listCourses(){
    this.courseService.allCourses().subscribe({
      next:(data)=>{
        this.courses = data
        console.log(data)
      }
    })
  }
}
