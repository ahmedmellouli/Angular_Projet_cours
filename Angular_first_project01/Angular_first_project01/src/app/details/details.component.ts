import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../services/produit.service";
import {Product} from "../core/product";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!:any;
  list!:Product[];
  p!:Product;

  constructor( private  activatedroute : ActivatedRoute, private prod:ProduitService) {

  }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.p =this.prod.produit[this.id];
  }

}
