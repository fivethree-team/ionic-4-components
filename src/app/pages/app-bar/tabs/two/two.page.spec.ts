import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPage } from './two.page';

describe('TwoPage', () => {
  let component: TwoPage;
  let fixture: ComponentFixture<TwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
