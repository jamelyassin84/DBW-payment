import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeCancelPageComponent } from './stripe-cancel-page.component';

describe('StripeCancelPageComponent', () => {
  let component: StripeCancelPageComponent;
  let fixture: ComponentFixture<StripeCancelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeCancelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeCancelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
