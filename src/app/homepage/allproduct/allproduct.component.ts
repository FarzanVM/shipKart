import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { ProductService } from '../../services/productservice/product.service';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlistservice/wishlist.service';
import { AuthService } from '../../services/sharedservice/auth.service';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SimpleproductcardComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit {

  startVal: any;
  endVal: any;
  product$: Observable<any> | undefined | any;
  wishlist$: Observable<any> | undefined | any;
  loadedData:boolean=false;
  constructor(private productservice: ProductService, private wishlistservice: WishlistService, private authservice: AuthService) { }

  ngOnInit(): void {

    const username = localStorage.getItem('username')
    const user = {
      username: username
    }
    const wishlistedItems = new Map()
    
    if (this.authservice.isAuthenticatedUser()) {
      const product = this.productservice.getProducts()
      this.wishlist$ = this.wishlistservice.getWishListItems(user)
      forkJoin([product, this.wishlist$]).subscribe((result: any) => {
        this.wishlist$ = result[1]
        if (this.wishlist$.length) {
          console.log(this.wishlist$)
          this.wishlist$.forEach((element: any) => {
            wishlistedItems.set(element._id, 0)
          })
          this.product$ = product.pipe(map((product: any) => {
            product = product.map((p: any) => {
              let match = false
              if (wishlistedItems.has(p._id)) {
                match = true
              }
              return {
                ...p,
                wishlisted: match
              }

            })
            return product
          }))
        }
        else{
          this.product$=product
        }
        this.loadedData=true
      })
    }
    else{
      this.product$=this.productservice.getProducts()
      this.loadedData=true
    }

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

}
