import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableMenuButtonComponent } from './collapsable-menu-button.component';

describe('CollapsableMenuButtonComponent', () => {
  let component: CollapsableMenuButtonComponent;
  let fixture: ComponentFixture<CollapsableMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableMenuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
