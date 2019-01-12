import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivRipple } from './ripple.component';

describe('RippleComponent', () => {
  let component: FivRipple;
  let fixture: ComponentFixture<FivRipple>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivRipple ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivRipple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
