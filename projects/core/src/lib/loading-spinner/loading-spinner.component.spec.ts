import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivLoadingSpinner } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: FivLoadingSpinner;
  let fixture: ComponentFixture<FivLoadingSpinner>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivLoadingSpinner ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivLoadingSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
