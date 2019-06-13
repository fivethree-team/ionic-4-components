import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarPage } from './app-bar.page';

describe('AppBarPage', () => {
  let component: AppBarPage;
  let fixture: ComponentFixture<AppBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppBarPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
