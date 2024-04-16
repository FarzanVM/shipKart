import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productservice/product.service';

@Component({
  selector: 'app-storeproducts',
  standalone: true,
  imports: [],
  templateUrl: './storeproducts.component.html',
  styleUrl: './storeproducts.component.scss'
})
export class StoreproductsComponent implements OnInit {

  constructor(private productservice:ProductService){}
  ngOnInit(): void {
    const storename = localStorage.getItem('storename')
    console.log("storename",storename)
    const store = {
      storename:storename
    }
    this.productservice.getStoreProducts(store).subscribe(res=>{
      console.log("store products",res)
    })
  }

}
