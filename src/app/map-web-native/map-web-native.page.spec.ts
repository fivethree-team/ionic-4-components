import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWebNativePage } from './map-web-native.page';

describe('MapWebNativePage', () => {
  let component: MapWebNativePage;
  let fixture: ComponentFixture<MapWebNativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWebNativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWebNativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
