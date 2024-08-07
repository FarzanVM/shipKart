import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../../services/orderservice/order.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.scss'
})
export class MyorderComponent implements OnInit{

  farupee=faIndianRupee;
  facirclecheck = faCircleCheck;

  orders$:Observable<any>|undefined;
  inprogress:boolean=true;
  completed:boolean = false;
  constructor(private orderservice:OrderService){}

  ngOnInit(): void {
    const username = localStorage.getItem('username')

    const user={
      username:username
    }

    this.orders$ =  this.orderservice.getorders(user);    
    this.orders$.subscribe(res=>{
      console.log("running orders",res)
    })
  }

  getOngoingOrders(){
    this.inprogress=true;
    this.completed=false
    this.ngOnInit()
  }
  getCompletedOrders(){
    this.inprogress=false;
    this.completed=true;
    const username = localStorage.getItem('username')

    const user={
      username:username
    }
    this.orders$= this.orderservice.getPastOrders(user)
  }


}
