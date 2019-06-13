import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivGalleryToolbarContent } from './gallery-toolbar-content.component';

describe('FivGalleryToolbarContent', () => {
  let component: FivGalleryToolbarContent;
  let fixture: ComponentFixture<FivGalleryToolbarContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivGalleryToolbarContent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivGalleryToolbarContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
