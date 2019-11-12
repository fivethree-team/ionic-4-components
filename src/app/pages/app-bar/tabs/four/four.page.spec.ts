import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourPage } from './four.page';

describe('FourPage', () => {
  let component: FourPage;
  let fixture: ComponentFixture<FourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FourPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
