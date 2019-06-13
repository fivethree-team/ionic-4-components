import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivFeatureDiscovery } from './feature-discovery.component';

describe('FivFeatureDiscovery', () => {
  let component: FivFeatureDiscovery;
  let fixture: ComponentFixture<FivFeatureDiscovery>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivFeatureDiscovery],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivFeatureDiscovery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
