import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPageComponent } from './accepted-page.component';

describe('AcceptedPageComponent', () => {
  let component: AcceptedPageComponent;
  let fixture: ComponentFixture<AcceptedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
