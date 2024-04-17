import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productservice/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductUpdateService } from '../../../services/sharedservice/product-update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storeproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storeproducts.component.html',
  styleUrl: './storeproducts.component.scss'
})
export class StoreproductsComponent implements OnInit {

  storeProducts$:Observable<any> | undefined;

  constructor(private productservice:ProductService,private productupdateservice:ProductUpdateService,private router:Router){}
  ngOnInit(): void {
    const storename = localStorage.getItem('storename')
    console.log("storename",storename)
    const store = {
      storename:storename
    }
    this.storeProducts$ = this.productservice.getStoreProducts(store);
    this.storeProducts$.subscribe(data =>{
      console.log(data)
    })
    // this.productservice.getStoreProducts(store).subscribe(res=>{
    //   console.log("store products",res)
    // })
  }

  deleteProduct(_id:any){
    const product = {
      id:_id
    }
    this.productservice.deleteProduct(product).subscribe(res =>{
      console.log(res)
      this.ngOnInit()
    })
    
  }
  updateProduct(p:any){
    this.productupdateservice.product = p;
    this.router.navigate(['admin','updateproduct']);
  }

}
