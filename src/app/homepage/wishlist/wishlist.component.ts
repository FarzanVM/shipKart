import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee,faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  farupee = faIndianRupee
  faStar=faStar

}
