import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!:any;
  constructor( private  activatedroute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
  }

}
