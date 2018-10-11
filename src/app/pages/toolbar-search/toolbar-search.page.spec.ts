import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSearchPage } from './toolbar-search.page';

describe('ToolbarSearchPage', () => {
  let component: ToolbarSearchPage;
  let fixture: ComponentFixture<ToolbarSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
