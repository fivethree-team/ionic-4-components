import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivStepHeaderComponent } from './fiv-step-header.component';

describe('FivStepHeaderComponent', () => {
  let component: FivStepHeaderComponent;
  let fixture: ComponentFixture<FivStepHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivStepHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivStepHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
