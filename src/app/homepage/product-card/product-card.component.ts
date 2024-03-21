import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart,faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  faHeart=faHeart;
  faStar=faStar;

}
