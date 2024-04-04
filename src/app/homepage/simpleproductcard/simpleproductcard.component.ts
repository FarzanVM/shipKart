import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart,faStar,faIndianRupee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simpleproductcard',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './simpleproductcard.component.html',
  styleUrl: './simpleproductcard.component.scss'
})
export class SimpleproductcardComponent {
  faHeart=faHeart;
  faStar=faStar;
  farupee=faIndianRupee

}
