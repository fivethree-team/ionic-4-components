import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStepComponent } from './fiv-step.component';

describe('FivStepComponent', () => {
  let component: FivStepComponent;
  let fixture: ComponentFixture<FivStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
