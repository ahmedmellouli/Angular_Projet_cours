import { Component, OnInit } from '@angular/core';
import {Product} from "../core/product";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product!: Product;

  constructor( private ps:ProduitService ,private router:Router) { }

  ngOnInit(): void {
    this.product =new Product();

  }
  ajouter(product:Product){
    this.ps.addProduct(product);
    this.router.navigateByUrl('/products')
  }

}
