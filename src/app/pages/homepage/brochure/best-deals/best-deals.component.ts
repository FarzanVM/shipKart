import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../../../core/services/productservice/product.service';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss'
})
export class BestDealsComponent implements OnInit,AfterViewInit {

  bestdeals$:Observable<any>|undefined
  angleright=faChevronRight;
  angleleft=faChevronLeft;

  @ViewChild('container') container:ElementRef | any;

  constructor(private productservice:ProductService){}
  ngAfterViewInit(): void {
    console.log(this.container?.nativeElement)
    console.log(this.container?.nativeElement.scrollLeft)
  }

  ngOnInit(): void {
    this.bestdeals$=this.productservice.getBestDeals();
  }

  moveRight(){
  this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft + 150), behavior: 'smooth' })

  }
  moveLeft(){
    this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft - 150), behavior: 'smooth' })
  }

}
