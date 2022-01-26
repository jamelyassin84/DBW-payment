import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeRefreshPageComponent } from './stripe-refresh-page.component';

describe('StripeRefreshPageComponent', () => {
  let component: StripeRefreshPageComponent;
  let fixture: ComponentFixture<StripeRefreshPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeRefreshPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeRefreshPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
