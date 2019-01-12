import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivLoadingButton } from './loading-button.component';

describe('LoadingButtonComponent', () => {
  let component: FivLoadingButton;
  let fixture: ComponentFixture<FivLoadingButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivLoadingButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivLoadingButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
