import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCheck, faCheckDouble, faTruck, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  facaretdown=faCaretDown;
  facheck=faCheck;
  fatruck=faTruck;
  fatruckrampbox=faTruckRampBox;
  facheckdouble=faCheckDouble;
  opendropdown:boolean=false;
  allstatus:String[]=["Order Confirmed","Shipped","Out For Delivery","Delivered"]
  faicons:any[]=[this.facheck,this.fatruck,this.fatruckrampbox,this.facheckdouble]
  orderstatus:String="Order Confirmed";
  currIndex:number=0;

  openStatus(){
    this.opendropdown=!this.opendropdown;
  }
  setStatus(index:number){
    this.currIndex=index;
    this.orderstatus = this.allstatus[index]
    this.opendropdown=false;
  }

}
