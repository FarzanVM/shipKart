import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faBolt, faBoltLightning, faCartShopping, faRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { exhaustMap, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/productservice/product.service';
import { CartService } from '../../../core/services/cartservice/cart.service';
import { OrderService } from '../../../core/services/orderservice/order.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SimpleproductcardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {

  faStar = faStar;
  farupee = faRupeeSign;
  facart = faCartShopping;
  fabolt = faBoltLightning;
  fa_angleright = faAngleRight;

  product$: Observable<any> | undefined
  product_id: any;
  private newOrder:any;

  similarProducts$: Observable<any> | undefined;
  productcategory!: string;
  constructor(private router: Router, private productservice: ProductService, private cartservice: CartService, private toastrservice: ToastrService, private orderservice: OrderService) { }

  ngOnInit(): void {
    const productId:string = localStorage.getItem('selectedProduct') ?? "";
    this.product$ = this.productservice.getSingleProduct(productId).pipe(exhaustMap((product:any)=>{
      this.productcategory = product.productcategory
      this.product_id = product._id;
      const username = localStorage.getItem('username')
      this.newOrder={
        product_id: product._id,
        quantity: 1,
        storename: product.storename,
        username: username,
        price: product.productnewprice,
        orderstatus: {
          inprogress: {
            status: true,
          },
          confirmed: {
            status: false,
          },
          shipped: {
            status: false
          },
          outfordelivery: {
            status: false
          },
          delivered: {
            status: false
          }
  
        }
      }
      this.similarProducts$ = this.productservice.getProductsByCategory(this.productcategory);
      return of(product)
    }))
  }
  addToCart() {
    const username = localStorage.getItem('username')
    const cart = {
      product_id: this.product_id,
      username: username
    }
    this.cartservice.addToCart(cart).subscribe((res: any) => {
      this.toastrservice.success(res.message)
    },
      (error) => {
        this.toastrservice.warning(error.error.message)
      }
    )
  }
  buyNow() {
    this.orderservice.addOrder([this.newOrder]).subscribe((res: any) => {
      this.toastrservice.success(res.message)
      this.router.navigate(['checkout'])
    },
      (error) => {
        this.toastrservice.warning(error.error.message)
      })
   
  }

}
