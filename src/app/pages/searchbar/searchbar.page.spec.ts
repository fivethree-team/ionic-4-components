import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarPage } from './searchbar.page';

describe('SearchbarPage', () => {
  let component: SearchbarPage;
  let fixture: ComponentFixture<SearchbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbarPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
