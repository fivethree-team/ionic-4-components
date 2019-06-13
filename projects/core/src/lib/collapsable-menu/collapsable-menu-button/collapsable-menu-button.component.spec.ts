import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivCollapsableMenuButton } from './collapsable-menu-button.component';

describe('CollapsableMenuButtonComponent', () => {
  let component: FivCollapsableMenuButton;
  let fixture: ComponentFixture<FivCollapsableMenuButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivCollapsableMenuButton]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivCollapsableMenuButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
