import { Component, ElementRef, ViewChild } from '@angular/core';
import { OfferComponent } from './offer/offer.component';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BestDealsComponent } from './best-deals/best-deals.component';

@Component({
  selector: 'app-brochure',
  standalone: true,
  imports: [OfferComponent,BestDealsComponent,FontAwesomeModule],
  templateUrl: './brochure.component.html',
  styleUrl: './brochure.component.scss'
})
export class BrochureComponent {
  
  angleright=faChevronRight;
  angleleft=faChevronLeft;
  @ViewChild('navbar') container:ElementRef | any;

  constructor(private router:Router){}

  gotoProduct(searchKey:string){
    localStorage.setItem('searchKey',searchKey)
    this.router.navigate(['/allproduct',searchKey])
  }
  moveLeft(){
    this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft - 150), behavior: 'smooth' })
  }
  moveRight(){
    this.container?.nativeElement.scrollTo({left: (this.container.nativeElement.scrollLeft + 150), behavior: 'smooth' })
  }

}
