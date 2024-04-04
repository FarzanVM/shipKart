import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SimpleproductcardComponent } from '../simpleproductcard/simpleproductcard.component';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [ProductCardComponent,SimpleproductcardComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit{
  
  startVal:any;
  endVal:any;

  ngOnInit(): void {
    
  }
  
  selectRange(input:any){
    this.endVal=input.value;
    console.log("range value",input.value)
  }

}
