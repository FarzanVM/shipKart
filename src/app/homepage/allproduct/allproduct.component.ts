import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { ProductService } from '../../services/productservice/product.service';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SimpleproductcardComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit{
  
  startVal:any;
  endVal:any;
  product$: any;
  wishlist$:any;
  constructor(private productservice:ProductService,private wishlistservice:WishlistService){}

  ngOnInit(): void {

    const username = localStorage.getItem('username')
    const user={
      username:username
    }
    const wishlistedItems=new Map()

    const product =  this.productservice.getProducts()
    const wishlist = this.wishlistservice.getWishListItems(user)

    forkJoin([product,wishlist]).subscribe(result =>{
      this.product$=result[0]
      this.wishlist$=result[1]
      if(this.wishlist$.length){
        this.wishlist$.forEach((element:any)=>{
          wishlistedItems.set(element._id,0)
        })
  
        this.product$ = this.product$.map((product: any)=>{
          let match=false
          if(wishlistedItems.has(product._id)){
            match=true
          }
          return {
            ...product,
            wishlisted:match
          }    
        })
      }
     
    })

  }
  refresh($event:any){
    if($event){
      this.ngOnInit();
    }
  }

  selectRange(input:any){
    this.endVal=input.value;
    console.log("range value",input.value)
  }

}
