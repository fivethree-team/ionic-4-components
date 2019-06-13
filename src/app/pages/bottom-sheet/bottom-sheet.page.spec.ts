import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetPage } from './bottom-sheet.page';

describe('BottomSheetPage', () => {
  let component: BottomSheetPage;
  let fixture: ComponentFixture<BottomSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
