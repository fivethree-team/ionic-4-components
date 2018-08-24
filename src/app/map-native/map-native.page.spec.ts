import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNativePage } from './map-native.page';

describe('MapNativePage', () => {
  let component: MapNativePage;
  let fixture: ComponentFixture<MapNativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapNativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
