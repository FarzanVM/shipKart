import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderproductcardComponent } from './orderproductcard.component';

describe('OrderproductcardComponent', () => {
  let component: OrderproductcardComponent;
  let fixture: ComponentFixture<OrderproductcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderproductcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderproductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
