import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportPage } from './viewport.page';

describe('ViewportPage', () => {
  let component: ViewportPage;
  let fixture: ComponentFixture<ViewportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewportPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
