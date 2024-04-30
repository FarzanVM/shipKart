import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.scss'
})
export class MyorderComponent {
  farupee=faIndianRupee

}
