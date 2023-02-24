import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {Product} from "../core/product";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categorie : string = "Homme";
  price : number=0;
  products !: Product[];
  S!:number;

  getColor(){

    if(this.price <20) {
      return 'red';
    }
    else {
      return 'green'
    }
  }

  getSize(){
    if(this.price < 20 )
    {
      return '20px';
    }
      else{
        return '50px';
      }
    }

  getClass(){
    if(this.price){
      return 'style1';
    }
    else {
      return 'style2'
    }
    }


  buy(i:number){
    this.products[i].quantity -=1;
  //p.quantity-=1;
  }

  like(i:number){
    this.products[i].like +=1;
  }
  constructor( private ProduitService:ProduitService,private calculService:CalculService) {


  }

  ngOnInit(): void {
    this.products=this.ProduitService.produit;



  }

  calcul(){
    this.S=this.calculService.getNumberOf(this.products,"quantity",0);
  }








}
