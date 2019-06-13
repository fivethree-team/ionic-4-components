import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivExpandableIndicator } from './expandable-indicator.component';

describe('ExpandableIndicatorComponent', () => {
  let component: FivExpandableIndicator;
  let fixture: ComponentFixture<FivExpandableIndicator>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivExpandableIndicator]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivExpandableIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
