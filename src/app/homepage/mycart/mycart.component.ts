import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartservice/cart.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { OrderService } from '../../services/orderservice/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.scss'
})
export class MycartComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  farupee = faIndianRupee
  faStar = faStar
  cartItems$: Observable<any> | undefined;
  price: number = 0;
  discount: number = 0;
  deliverycharges: number = 0;
  totalPrice: number = 0;
  savedPercent: number = 0;

  constructor(private cartservice: CartService,private orderservice:OrderService,private toastrservice:ToastrService) { }

  ngOnInit(): void {

    this.cartservice.refreshNeeded$.subscribe(() => {
      this.getCartItems();
    })
    this.getCartItems();

  }

  private getCartItems() {
    const username = localStorage.getItem('username')
    const user = {
      username: username
    }
    this.cartItems$ = this.cartservice.getCartItems(user)
    this.cartItems$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(item => {
      item.forEach((product: any) => {

        this.price += product[0].productnewprice
        const offprice = product[0].productprice * product[0].productdiscount / 100
        this.discount += offprice

      });
      this.savedPercent = Math.round(this.discount / this.price * 100)
      this.totalPrice = this.price + this.deliverycharges
    })
  }

  removeFromCart(product_id: any) {
    console.log("cartid", product_id)
    this.cartservice.removeFromCart(product_id).subscribe(res => {
    })
  }

  orderItem(id:string,storename:string){
    const username = localStorage.getItem('username')
    const order = {
      product_id:id,
      username:username,
      storename:storename
    }

    this.orderservice.addOrder(order).subscribe((res:any)=>{
      this.toastrservice.success(res.message)
    },
  (error)=>{
    this.toastrservice.warning(error.error.message)
  })

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }



}
