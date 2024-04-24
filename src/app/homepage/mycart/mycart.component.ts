import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee,faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.scss'
})
export class MycartComponent {
  farupee=faIndianRupee
  faStar=faStar

}
