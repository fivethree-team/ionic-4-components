import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchFieldComponent } from './touch-field.component';

describe('TouchFieldComponent', () => {
  let component: TouchFieldComponent;
  let fixture: ComponentFixture<TouchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TouchFieldComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
