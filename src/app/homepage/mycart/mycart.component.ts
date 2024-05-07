import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee, faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartservice/cart.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';
import { OrderService } from '../../services/orderservice/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  fadelete = faTrashCan;

  cartItems$: Observable<any> | undefined;
  price: number = 0;
  discount: number = 0;
  deliverycharges: number = 0;
  totalPrice: number = 0;
  savedPercent: number = 0;

  selectedCartItems:Object[]=[]
 

  constructor(private cartservice: CartService,private orderservice:OrderService,private toastrservice:ToastrService,private router:Router) { }

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

        this.price += product.products.productnewprice
        const offprice = product.products.productprice * product.products.productdiscount / 100
        this.discount += offprice

      });
      this.savedPercent = Math.round(this.discount / this.price * 100)
      this.totalPrice = this.price + this.deliverycharges
    })
  }


 
  selectProduct(product_id:any,storename:any){
    const username = localStorage.getItem('username')
    const order = {
      product_id:product_id,
      username:username,
      storename:storename,
      orderstatus:"Order Confirmed"
    }
    if(this.selectedCartItems.some((item:any)=>item.product_id===order.product_id)){
      this.selectedCartItems=this.selectedCartItems.filter((item:any)=>item.product_id!==order.product_id)
    }
    else{
      this.selectedCartItems.push(order)
    }
    console.log(this.selectedCartItems)
  }

  removeFromCart(product_id: any) {
    this.cartservice.removeFromCart(product_id).subscribe(res => {
    })
  }

  orderItem(){
    // this.router.navigate(['checkout'])

    this.orderservice.addOrder(this.selectedCartItems).subscribe((res:any)=>{
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
