import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursService} from "../cours.service";
import {CtagorieService} from "../ctagorie.service";
import {ChapitreService} from "../chapitre.service";

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.css']
})
export class DetailsCoursComponent implements OnInit {
  course:any
  categorie: any
  chapitres: any
  constructor(private route: ActivatedRoute,
              private coursService: CoursService,
              private categorieService : CtagorieService,
              private chapitreService: ChapitreService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.detailsCours(id)
  }
  detailsCours(id:number){
    this.coursService.courseDetails(id).subscribe({
      next:(data)=>{
        this.course = data[0]
        this.getCategorieById(data[0].categorie_id)
        this.getChapitreById(data[0].id)
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
  getChapitreById(id:number){
    this.chapitreService.FindChapitreById(id).subscribe({
      next:(data)=>{
        this.chapitres = data
        console.log(this.chapitres)
      }
    })
  }
}
