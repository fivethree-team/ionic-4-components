import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivOverlay } from './overlay.component';

describe('FivOverlay', () => {
  let component: FivOverlay;
  let fixture: ComponentFixture<FivOverlay>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivOverlay],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivOverlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
