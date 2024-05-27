import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../../services/productservice/product.service';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    const username=localStorage.getItem('username')
    // this.bestdeals$=this.productservice.getProducts(username);
  }

  moveRight(){
  this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft + 150), behavior: 'smooth' })

  }
  moveLeft(){
    this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft - 150), behavior: 'smooth' })
  }

}
