import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  fakeproducts:Array<any>=[{name:"Laptop",selled:72,total:100},{name:"iphone",selled:56,total:72}]

  calculate(num1:number,num2:number){
   return Math.round((num1/num2)*100)
  }
  calculateforGraph(num1:number,num2:number){
    return (100-Math.round((num1/num2)*100)+"%")
  }

}
