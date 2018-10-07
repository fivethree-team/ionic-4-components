import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStepperComponent } from './fiv-stepper.component';

describe('FivStepperComponent', () => {
  let component: FivStepperComponent;
  let fixture: ComponentFixture<FivStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
