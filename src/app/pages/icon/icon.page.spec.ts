import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPage } from './icon.page';

describe('IconPage', () => {
  let component: IconPage;
  let fixture: ComponentFixture<IconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
