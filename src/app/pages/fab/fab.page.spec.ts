import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabPage } from './fab.page';

describe('FabPage', () => {
  let component: FabPage;
  let fixture: ComponentFixture<FabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
