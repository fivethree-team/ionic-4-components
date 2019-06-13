import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FivStepperHorizontal } from './stepper-horizontal.component';

describe('StepperHeaderHorizontalComponent', () => {
  let component: FivStepperHorizontal;
  let fixture: ComponentFixture<FivStepperHorizontal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivStepperHorizontal]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepperHorizontal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
