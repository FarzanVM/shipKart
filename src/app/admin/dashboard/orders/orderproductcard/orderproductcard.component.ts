import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCaretDown, faCheck, faCheckDouble, faTruck, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../../../../services/orderservice/order.service';
import { ToastrService } from 'ngx-toastr';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-orderproductcard',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './orderproductcard.component.html',
  styleUrl: './orderproductcard.component.scss'
})
export class OrderproductcardComponent implements OnInit {
  
  facaretdown=faCaretDown;
  facheck=faCheck;
  fatruck=faTruck;
  fatruckrampbox=faTruckRampBox;
  facheckdouble=faCheckDouble;
  opendropdown:boolean=false;
  allstatus:String[]=["Order Confirmed","Shipped","Out For Delivery","Delivered"]
  faicons:IconDefinition[]=[this.facheck,this.fatruck,this.fatruckrampbox,this.facheckdouble]
  orderstatus:String="Order Confirmed";
  currIndex:number=0;

  @Input() order:any;

  constructor(private orderservice:OrderService,private toastrservice:ToastrService){}

  ngOnInit(): void {
    console.log(this.order)
    this.orderstatus=this.order?.orderstatus;
    this.currIndex=this.allstatus.indexOf(this.orderstatus)
    if(this.currIndex<0){
      this.currIndex=0;
    }
  }

  openStatus(){
    this.opendropdown=!this.opendropdown;
  }
  setStatus(index:number){
    this.currIndex=index;
    this.orderstatus = this.allstatus[index]
    this.opendropdown=false;
  }
  confirm(id:any){
    console.log("id",id)
    const orderId={
      _id:id,
      orderstatus:this.orderstatus
    }
    const date = new Date()
    const month=date.getMonth()
    const year=date.getFullYear()
    console.log(date.toDateString())
    console.log(month)


  //   this.orderservice.updateorder(orderId).subscribe((res:any)=>{
  //     this.toastrservice.success(res.message);
  //   },
  // (error)=>{
  //   this.toastrservice.error(error.error.message);
  // })
  }

}
