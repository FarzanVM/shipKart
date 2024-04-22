import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent implements OnInit {
 
  url:string[]=["assets/images/ads/iphonead.webp","assets/images/ads/laptopad.jpg","assets/images/ads/shoead.jpg","assets/images/ads/toysad.webp"]
  currIndex:number=0

  ngOnInit(): void {
    setInterval(()=>{
      this.currIndex=(this.currIndex+1)%this.url.length

    },2000)
  }


}
