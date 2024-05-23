import { Component } from '@angular/core';
import { OfferComponent } from '../offer/offer.component';
import { BestDealsComponent } from '../best-deals/best-deals.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brochure',
  standalone: true,
  imports: [OfferComponent,BestDealsComponent],
  templateUrl: './brochure.component.html',
  styleUrl: './brochure.component.scss'
})
export class BrochureComponent {

  constructor(private router:Router){}

  gotoProduct(searchKey:string){
    localStorage.setItem('searchKey',searchKey)
    this.router.navigate(['/allproduct',searchKey])
  }

}
