import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeMapBottomSheetPage } from './native-map-bottom-sheet.page';

describe('NativeMapBottomSheetPage', () => {
  let component: NativeMapBottomSheetPage;
  let fixture: ComponentFixture<NativeMapBottomSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeMapBottomSheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeMapBottomSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
