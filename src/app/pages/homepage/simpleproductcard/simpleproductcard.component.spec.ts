import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleproductcardComponent } from './simpleproductcard.component';

describe('SimpleproductcardComponent', () => {
  let component: SimpleproductcardComponent;
  let fixture: ComponentFixture<SimpleproductcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleproductcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleproductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
