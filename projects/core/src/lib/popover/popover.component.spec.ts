import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivPopover } from './popover.component';

describe('PopoverComponent', () => {
  let component: FivPopover;
  let fixture: ComponentFixture<FivPopover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivPopover ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivPopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
