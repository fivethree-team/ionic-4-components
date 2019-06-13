import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStepper } from './stepper.component';

describe('StepperComponent', () => {
  let component: FivStepper;
  let fixture: ComponentFixture<FivStepper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivStepper]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
