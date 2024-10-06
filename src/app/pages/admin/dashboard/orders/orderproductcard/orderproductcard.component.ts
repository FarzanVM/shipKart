import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCaretDown, faCheck, faCheckDouble, faTruck, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { OrderService } from '../../../../../core/services/orderservice/order.service';
import { ProductService } from '../../../../../core/services/productservice/product.service';


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
  facirclecheck=faCircleCheck;
  fatruck=faTruck;
  fatruckrampbox=faTruckRampBox;
  facheckdouble=faCheckDouble;
  opendropdown:boolean=false;
  allstatus:String[]=["confirmed","shipped","outfordelivery","delivered"]
  faicons:IconDefinition[]=[this.facheck,this.fatruck,this.fatruckrampbox,this.facheckdouble]
  orderstatus:String="Set Status";
  currIndex:number=0;
  selectedOrder:number=0;
  Object=Object;

  @Input() order:any;

  constructor(private orderservice:OrderService,private toastrservice:ToastrService,private productservice:ProductService){}

  ngOnInit(): void {
    console.log(this.order)
    // this.orderstatus=this.order?.orderstatus;
    this.currIndex=this.allstatus.indexOf(this.orderstatus)
    if(this.currIndex<0){
      this.currIndex=0;
    }
  }

  getIcon(status:string){
    const index = this.allstatus.indexOf(status)
    return this.faicons[index]

  }

  openStatus(){
    this.opendropdown=!this.opendropdown;
  }
  setStatus(key:string){
    this.currIndex= this.allstatus.indexOf(key)

    this.orderstatus = key
    this.opendropdown=false;
  
  }
  confirm(id:any){
    const date = new Date()
    const orderId={
      _id:id,
      orderstatus:this.orderstatus,
      date:date.toDateString()
    }
    if(this.orderstatus === "shipped"){
      console.log("Shipped")
      const product={
        _id:this.order.product_id,
        quantity:this.order.quantity
      }
      this.productservice.updateStock(product).subscribe((res:any) =>{
        this.toastrservice.success(res.message)
      },
      (error) =>{
        this.toastrservice.error(error.error.message);
      })
    }
   

    this.orderservice.updateorder(orderId).subscribe((res:any)=>{
      this.toastrservice.success(res.message);
    },
  (error)=>{
    this.toastrservice.error(error.error.message);
  })
  }

}
