import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivLoadingProgressBar } from './loading-progress-bar.component';

describe('LoadingProgressBarComponent', () => {
  let component: FivLoadingProgressBar;
  let fixture: ComponentFixture<FivLoadingProgressBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivLoadingProgressBar]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivLoadingProgressBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
