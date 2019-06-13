import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsFooterComponent } from './docs-footer.component';

describe('DocsFooterComponent', () => {
  let component: DocsFooterComponent;
  let fixture: ComponentFixture<DocsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocsFooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
