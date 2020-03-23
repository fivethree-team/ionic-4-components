import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePage } from './one.page';

describe('OnePage', () => {
  let component: OnePage;
  let fixture: ComponentFixture<OnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
