import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeMapPage } from './native-map.page';

describe('NativeMapPage', () => {
  let component: NativeMapPage;
  let fixture: ComponentFixture<NativeMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
