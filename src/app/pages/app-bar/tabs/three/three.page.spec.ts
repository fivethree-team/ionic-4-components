import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePage } from './three.page';

describe('ThreePage', () => {
  let component: ThreePage;
  let fixture: ComponentFixture<ThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
