import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableIndicatorComponent } from './expandable-indicator.component';

describe('ExpandableIndicatorComponent', () => {
  let component: ExpandableIndicatorComponent;
  let fixture: ComponentFixture<ExpandableIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
