import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshPage } from './refresh.page';

describe('RefreshPage', () => {
  let component: RefreshPage;
  let fixture: ComponentFixture<RefreshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
