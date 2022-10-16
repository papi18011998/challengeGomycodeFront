import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursService} from "../cours.service";

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.css']
})
export class DetailsCoursComponent implements OnInit {
  course:any
  constructor(private route: ActivatedRoute,
              private coursService: CoursService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.detailsCours(id)
  }
  detailsCours(id:number){
    this.coursService.courseDetails(id).subscribe({
      next:(data)=>{
        this.course = data[0]
        console.log(data)
      }
    })
  }
}
