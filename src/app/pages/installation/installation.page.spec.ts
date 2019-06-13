import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationPage } from './installation.page';

describe('InstallationPage', () => {
  let component: InstallationPage;
  let fixture: ComponentFixture<InstallationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstallationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
