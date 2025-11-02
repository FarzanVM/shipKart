import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight,} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { OrderService } from '../../../../core/services/orderservice/order.service';
import { OrderproductcardComponent } from './orderproductcard/orderproductcard.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,OrderproductcardComponent,FontAwesomeModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  
  orders$:Observable<any>|undefined;
  facaretright=faCaretRight;
  circlecheck = faCircleCheck;
  inprogress = true;
  fullfilled = false;
  constructor(private orderservice:OrderService){}

  ngOnInit(): void {
   const storeId=localStorage.getItem('storeId')
   const store={
    storeId:storeId
   }
    this.orders$ = this.orderservice.getStoreOrders(store)
    this.orders$.subscribe(res=>{
      console.log("orders",res)
    })
  }

  getFullFilledOrders(){
    this.fullfilled=true;
    this.inprogress = false;

    const storename=localStorage.getItem('storename')
    const store={
      storename:storename,
      type:"delivered"
    }

    this.orders$ =  this.orderservice.getFullFilledOrders(store)
  }

  getcurrentOrders(){
    this.inprogress=true;
    this.fullfilled=false;
    this.ngOnInit()
  }

}
