import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperToolsPage } from './developer-tools.page';

describe('DeveloperToolsPage', () => {
  let component: DeveloperToolsPage;
  let fixture: ComponentFixture<DeveloperToolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperToolsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperToolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
