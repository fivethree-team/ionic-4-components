import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStepContent } from './step-content.component';

describe('StepContentComponent', () => {
  let component: FivStepContent;
  let fixture: ComponentFixture<FivStepContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivStepContent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
