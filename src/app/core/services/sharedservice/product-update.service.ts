import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductUpdateService {

  private _product:any;

  get product(){
    return this._product
  }

  set product(product:any){
    this._product=product;
  }
  constructor() {}

  
}
