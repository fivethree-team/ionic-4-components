import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableLabelPage } from './editable-label.page';

describe('EditableLabelPage', () => {
  let component: EditableLabelPage;
  let fixture: ComponentFixture<EditableLabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditableLabelPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableLabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
