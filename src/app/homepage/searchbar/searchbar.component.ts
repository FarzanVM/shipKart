import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  faSearch=faSearch;
  searchResults:any[]=["mobiles","toys","dress","Iphone"]
}
