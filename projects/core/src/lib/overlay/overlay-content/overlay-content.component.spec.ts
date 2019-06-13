import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivOverlayContent } from './overlay-content.component';

describe('FivOverlayContent', () => {
  let component: FivOverlayContent;
  let fixture: ComponentFixture<FivOverlayContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivOverlayContent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivOverlayContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
