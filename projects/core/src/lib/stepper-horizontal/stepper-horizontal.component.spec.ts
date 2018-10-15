import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperHorizontalComponent } from './stepper-horizontal.component';


describe('StepperHeaderHorizontalComponent', () => {
  let component: StepperHorizontalComponent;
  let fixture: ComponentFixture<StepperHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
