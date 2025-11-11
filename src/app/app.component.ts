import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {} from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone:true,
    imports: [CommonModule,RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: []
})
export class AppComponent implements OnDestroy{
  
  title = 'shipkart';
  ngOnDestroy(): void {
    localStorage.clear()
  }

}
