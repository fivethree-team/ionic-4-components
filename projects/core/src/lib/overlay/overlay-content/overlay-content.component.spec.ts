import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayContentPage } from './overlay-content.page';

describe('OverlayContentPage', () => {
  let component: OverlayContentPage;
  let fixture: ComponentFixture<OverlayContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
