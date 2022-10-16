import { Component, OnInit } from '@angular/core';
import {CoursService} from "../cours.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursService: CoursService) { }

  ngOnInit() {
  }

}
