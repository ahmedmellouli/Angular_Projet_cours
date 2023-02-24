import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponentComponent} from "./articles-component/articles-component.component";
import {ProductsComponent} from "./products/products.component";
import {OffresEmploiComponentComponent} from "./offres-emploi-component/offres-emploi-component.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailsComponent} from "./details/details.component";
import {AddproductComponent} from "./addproduct/addproduct.component";


const routes:Routes =[
  {path :'' ,redirectTo:'products', pathMatch:'full'},
  {path :'products' ,component :ProductsComponent},
  {path :'article' ,component :ArticlesComponentComponent},
  {path :'offres' ,component :OffresEmploiComponentComponent},
  {path :'addproduct' ,component :AddproductComponent},
  {path :'details/:id' ,component :DetailsComponent},
  {path :'**' ,component :NotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
