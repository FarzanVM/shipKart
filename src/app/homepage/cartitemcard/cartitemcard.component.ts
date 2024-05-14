import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee, faMinus, faPlus, faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartservice/cart.service';

@Component({
  selector: 'app-cartitemcard',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cartitemcard.component.html',
  styleUrl: './cartitemcard.component.scss'
})
export class CartitemcardComponent implements OnInit {

  @Input() item:any;
  @Output() selectedItem=new EventEmitter<Object>();

  farupee = faIndianRupee
  faStar = faStar
  fadelete = faTrashCan;
  faplus=faPlus;
  faminus=faMinus;

  quantity:number=1;

  constructor(private cartservice:CartService){}

  ngOnInit(): void {
  
  }

  decrement(){
    if(this.quantity>1){
      this.quantity-=1
    }
  
  }
  increment(){
    this.quantity+=1
  }
  
  selectProduct(product_id:any,storename:any){
    const product ={
      product_id:product_id,
      quantity:this.quantity,
      storename:storename,
    }
    this.selectedItem.emit(product)
  }

  removeFromCart(product_id: any) {
    this.cartservice.removeFromCart(product_id).subscribe(res => {
    })
  }
}
