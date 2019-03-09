import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPage } from './overlay.page';

describe('OverlayPage', () => {
  let component: OverlayPage;
  let fixture: ComponentFixture<OverlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
