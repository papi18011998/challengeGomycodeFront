import { Component, OnInit } from '@angular/core';
import {CoursService} from "../cours.service";
import {CtagorieService} from "../ctagorie.service";

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
  courses:any
  categories:[] =[]
  constructor(private courseService: CoursService,
              private categorieService: CtagorieService) { }

  ngOnInit() {
    this.listCourses()
  }
  listCourses(){
    this.courseService.allCourses().subscribe({
      next:(data)=>{
        this.courses = data
        data.map((cours:any)=>{
          this.getCategorieById(cours.categorie_id,this.categories)
        })
      }
    })
  }
  getCategorieById(id:number, categories:[]){
    this.categorieService.findCategorieById(id).subscribe({
      next:(data)=>{
        // @ts-ignore
        categories.push(data[0])
      }
    })
  }
}
