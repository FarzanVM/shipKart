import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { OrderService } from '../../../core/services/orderservice/order.service';

@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.scss'
})
export class MyorderComponent implements OnInit{


  facirclecheck = faCircleCheck;
  faangleright = faAnglesRight;

  orders$:Observable<any>|undefined;
  inprogress:boolean=true;
  completed:boolean = false;
  constructor(private orderservice:OrderService,private router:Router){}

  ngOnInit(): void {
    const username = localStorage.getItem('username')

    const user={
      username:username
    }
    this.getOngoingOrders();
    // this.orders$ =  this.orderservice.getorders(user);    
    // this.orders$.subscribe(res=>{
    //   console.log("running orders",res)
    // })
  }

  getOngoingOrders(){
    this.inprogress=true;
    this.completed=false
    const username = localStorage.getItem('username')

    const user={
      username:username
    }
    this.orders$ =  this.orderservice.getorders(user);    
    // this.ngOnInit()
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

  gotoReview(productId:any){
    localStorage.setItem('reviewproductId',productId)
    this.router.navigate(['review'])
  }

}
