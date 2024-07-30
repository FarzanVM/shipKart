import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee, faMinus} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartservice/cart.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/orderservice/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CartitemcardComponent } from '../cartitemcard/cartitemcard.component';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,CartitemcardComponent],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.scss'
})
export class MycartComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  farupee=faIndianRupee;
  faminus = faMinus;

  cartItems$: Observable<any> | undefined;
  price: number = 0;
  discount: number = 0;
  deliverycharges: number = 0;
  totalPrice: number = 0;
  savedPercent: number = 0;
  quantity:number=1;

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

    // this.cartItems$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(item => {
    //   item?.forEach((product: any) => {

    //     this.price += product.products.productnewprice
    //     const offprice = product.products.productprice * product.products.productdiscount / 100
    //     this.discount += offprice

    //   });
    //   this.savedPercent = Math.round(this.discount / this.price * 100)
    //   this.totalPrice = this.price + this.deliverycharges
    // })
  }

  updateProduct(event:any){

    const newquantity = event.newquantity
    const productid = event.product_id
    console.log("new",event)

    this.selectedCartItems.forEach((product:any)=>{
      if(product.product_id === productid){
        product.quantity = newquantity
      }
    })
    this.calculateTotalPrice()
    console.log("Updated",this.selectedCartItems)
  }
  calculateTotalPrice(){
    this.price = 0
    this.totalPrice=0
    this.discount=0
    this.savedPercent=0
    this.selectedCartItems.forEach((product:any)=>{
      this.price+=product.baserate*product.quantity;
      const offprice =(product.baserate -  product.price)*product.quantity;
      this.discount+=offprice
    })
    this.savedPercent = Math.round(this.discount/this.price * 100)
    this.totalPrice = this.price + this.deliverycharges - this.discount;
    console.log("currentprice",this.price)
  }

  selectProduct(event:any){
    const username = localStorage.getItem('username')
    const order = {
      product_id:event.product_id,
      quantity:event.quantity,
      username:username,
      storename:event.storename,
      price:event.price,
      baserate:event.baserate,
      discount:event.discount,
      orderstatus:{
        inprogress:{
          status:true,
        },
        confirmed:{
          status:false,
        },
        shipped:{
          status:false
        },
        outfordelivery:{
          status:false
        },
        delivered:{
          status:false
        }

      }
    
    }
    console.log(order)
    if(this.selectedCartItems.some((item:any)=>item.product_id===order.product_id)){
      this.selectedCartItems=this.selectedCartItems.filter((item:any)=>item.product_id!==order.product_id)
    }
    else{
      this.selectedCartItems.push(order)
    }
    console.log(this.selectedCartItems)
    this.calculateTotalPrice()
  }

  orderItem(){

    this.orderservice.addOrder(this.selectedCartItems).subscribe((res:any)=>{
      this.toastrservice.success(res.message)
      this.router.navigate(['checkout'])
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
