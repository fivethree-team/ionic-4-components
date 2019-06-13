import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStepHeader } from './step-header.component';

describe('StepHeaderComponent', () => {
  let component: FivStepHeader;
  let fixture: ComponentFixture<FivStepHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivStepHeader]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
