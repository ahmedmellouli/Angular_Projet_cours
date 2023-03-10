import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponent,
    NavBarComponent,
    NotFoundComponent,
    DetailsComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
