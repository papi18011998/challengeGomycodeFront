import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursService} from "../cours.service";
import {CtagorieService} from "../ctagorie.service";

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.css']
})
export class DetailsCoursComponent implements OnInit {
  course:any
  categorie: any
  constructor(private route: ActivatedRoute,
              private coursService: CoursService,
              private categorieService : CtagorieService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.detailsCours(id)
  }
  detailsCours(id:number){
    this.coursService.courseDetails(id).subscribe({
      next:(data)=>{
        this.course = data[0]
      }
    })
  }
  getCategorieById(id:number){
    this.categorieService.findCategorieById(id).subscribe({
      next:(data)=>{
          this.categorie = data[0]
      }
    })
  }
}
