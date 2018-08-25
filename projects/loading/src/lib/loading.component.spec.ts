import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSpinner } from './fab/fab.component';

describe('FabSpinner', () => {
  let component: FabSpinner;
  let fixture: ComponentFixture<FabSpinner>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSpinner ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
