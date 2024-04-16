import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productservice/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-storeproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storeproducts.component.html',
  styleUrl: './storeproducts.component.scss'
})
export class StoreproductsComponent implements OnInit {

  storeProducts$:Observable<any> | undefined;

  constructor(private productservice:ProductService){}
  ngOnInit(): void {
    const storename = localStorage.getItem('storename')
    console.log("storename",storename)
    const store = {
      storename:storename
    }
    this.storeProducts$ = this.productservice.getStoreProducts(store);
    // this.productservice.getStoreProducts(store).subscribe(res=>{
    //   console.log("store products",res)
    // })
  }

}
