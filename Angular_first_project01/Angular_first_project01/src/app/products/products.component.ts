import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categorie : string = "Homme";
  price : number=0;
  products : any [] =[
    {id:1, title: 'T-shirt 1', price :18,quantity :5, like:25},
    {id:2, title: 'T-shirt 2', price :2,quantity :10, like:56},
    {id:3, title: 'T-shirt 3', price :165,quantity :78, like:69},
  ];


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
  constructor() { }

  ngOnInit(): void {
  }


}
