import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivEditableLabel } from './editable-label.component';

describe('FivEditableLabel', () => {
  let component: FivEditableLabel;
  let fixture: ComponentFixture<FivEditableLabel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivEditableLabel],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivEditableLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
