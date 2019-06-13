import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPage } from './dialog.page';

describe('DialogPage', () => {
  let component: DialogPage;
  let fixture: ComponentFixture<DialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
