import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeSuccessPageComponent } from './stripe-success-page.component';

describe('StripeSuccessPageComponent', () => {
  let component: StripeSuccessPageComponent;
  let fixture: ComponentFixture<StripeSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeSuccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
