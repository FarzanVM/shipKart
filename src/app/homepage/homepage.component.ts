import { Component } from '@angular/core';
import { OfferComponent } from './offer/offer.component';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { RouterOutlet } from '@angular/router';
import { faCartShopping ,faStore} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllproductComponent } from './allproduct/allproduct.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [OfferComponent,BestDealsComponent,RouterOutlet,FontAwesomeModule,SearchbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  faCartShopping=faCartShopping
  faStore=faStore

}
