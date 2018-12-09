import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPage } from './directives.page';

describe('DirectivesPage', () => {
  let component: DirectivesPage;
  let fixture: ComponentFixture<DirectivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
