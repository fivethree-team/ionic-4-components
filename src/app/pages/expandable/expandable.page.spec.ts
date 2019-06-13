import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablePage } from './expandable.page';

describe('ExpandablePage', () => {
  let component: ExpandablePage;
  let fixture: ComponentFixture<ExpandablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandablePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
