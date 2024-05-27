import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { ProductService } from '../../services/productservice/product.service';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';
import { AuthService } from '../../services/sharedservice/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SimpleproductcardComponent,RouterModule],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit {

  startVal: any;
  endVal: any;

  totalresults:number=0;
  product$: Observable<any> | undefined | any;
  wishlist$: Observable<any> | undefined | any;
  loadedData:boolean=false;
  currentlevel:string|null="";

  constructor(private productservice: ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const searchKey= localStorage.getItem('searchKey')
      this.currentlevel=searchKey;

      const username = localStorage.getItem('username')

      const user={
        username:username
      }
      this.product$ = this.productservice.getProducts(user,searchKey)
      this.product$.subscribe((res: any)=>{
        this.totalresults=res.length
        console.log(res)
      })
      
    })
    // this.product$ = this.productservice.getProducts(username)
  
  }
  refresh($event: any) {
    console.log("event added")
    if ($event) {
      this.ngOnInit();
    }
  }

  selectRange(input: any) {
    this.endVal = input.value;
    console.log("range value", input.value)
  }

  getProductsBy(order:string){
    const searchKey= localStorage.getItem('searchKey')
    const username = localStorage.getItem('username')

    const user={
      username:username
    }
    this.product$=this.productservice.getProductsBy(searchKey,'price',order,user)
  }

}
