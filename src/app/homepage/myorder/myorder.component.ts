import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../../services/orderservice/order.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.scss'
})
export class MyorderComponent implements OnInit{

  farupee=faIndianRupee
  allstatus:String[]=["Order Confirmed","Shipped","Out For Delivery","Delivered"]
  orders$:Observable<any>|undefined;
  constructor(private orderservice:OrderService){}

  ngOnInit(): void {
    const username = localStorage.getItem('username')

    const user={
      username:username
    }

    this.orders$ =  this.orderservice.getorders(user);
    this.orders$.subscribe(res=>{
      console.log(res)
    })
    
  }



}
