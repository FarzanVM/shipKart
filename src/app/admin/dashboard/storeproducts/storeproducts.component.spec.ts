import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreproductsComponent } from './storeproducts.component';

describe('StoreproductsComponent', () => {
  let component: StoreproductsComponent;
  let fixture: ComponentFixture<StoreproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
