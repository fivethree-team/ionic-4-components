import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStep } from './step.component';

describe('StepComponent', () => {
  let component: FivStep;
  let fixture: ComponentFixture<FivStep>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivStep]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
