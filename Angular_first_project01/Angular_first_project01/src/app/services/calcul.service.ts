import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {



  constructor() { }

  S!:number;

  getNumberOf(list:any[], critiria:string, value:any){

    for (let i of list){
      if (i[critiria]===value){
        this.S=this.S++;
      }
    }
    return this.S
  }
}
