import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCheck, faCheckDouble, faTruck, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { OrderService } from '../../../services/orderservice/order.service';
import { OrderproductcardComponent } from './orderproductcard/orderproductcard.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,OrderproductcardComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  
  orders$:Observable<any>|undefined;
  constructor(private orderservice:OrderService){}

  ngOnInit(): void {
   const storename=localStorage.getItem('storename')
   const store={
    storename:storename
   }
    this.orders$ = this.orderservice.getStoreOrders(store)
  }



}
