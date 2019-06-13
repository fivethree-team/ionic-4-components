import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivExpandable } from './expandable.component';

describe('ExpandableComponent', () => {
  let component: FivExpandable;
  let fixture: ComponentFixture<FivExpandable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivExpandable]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivExpandable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
