import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivSpinner } from './spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: FivSpinner;
  let fixture: ComponentFixture<FivSpinner>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivSpinner]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
