import { CommonModule, LocationStrategy, PlatformLocation } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBuildingColumns, faRupeeSign, faSackDollar, faTruck } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/userservice/user.service';
import { Observable} from 'rxjs';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { OrderService } from '../../services/orderservice/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit{
  facreditcard=faCreditCard;
  fagooglepay=faGooglePay;
  fabank=faBuildingColumns;
  fatruck=faTruck;
  fasackdollar=faSackDollar;
  fabag=faBagShopping;
  faruppesign=faRupeeSign;


  user$:Observable<any>|undefined;
  orders$:Observable<any>|undefined;
  products:Observable<any>|undefined

  subtotal:number=0;
  shippingcharge:number=0;
  total:number=0;
  orderIds:any[]=[]
  @HostListener('window:beforeunload', ['$event'])
  preventBackRoute():Observable<boolean>|boolean {
    return false  
  }

  constructor(private userservice:UserService,private router:Router,private orderservice:OrderService){

  }

  ngOnInit(): void {

    const username=localStorage.getItem('username')
    if(username){
      this.user$ =  this.userservice.getUser(username)
    }
    const user={
      username:username
    }
    this.orders$ = this.orderservice.getCurrentOrders(user)
    this.orders$.subscribe((item:any)=>{
      console.log(item)
      item?.forEach((element: any) => {
        this.subtotal+=element.products.productnewprice
        this.orderIds.push({_id:element._id})
        
      });
      this.total=this.subtotal + this.shippingcharge;
    })
  }
  goback(){
    this.router.navigate(['mycart'])
  }

  payOrder(){
    console.log(this.orderIds)
    this.orderservice.updateBulkOrders(this.orderIds).subscribe(res=>{
      console.log(res)
    })
  }

}
