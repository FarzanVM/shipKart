import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FontAwesomeModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.scss',
  providers:[]
})
export class AppComponent {
  title = 'shipkart';

}
