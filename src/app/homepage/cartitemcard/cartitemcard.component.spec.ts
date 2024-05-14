import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemcardComponent } from './cartitemcard.component';

describe('CartitemcardComponent', () => {
  let component: CartitemcardComponent;
  let fixture: ComponentFixture<CartitemcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartitemcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartitemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
