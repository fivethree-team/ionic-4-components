import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleComponent } from './ripple.component';

describe('RippleComponent', () => {
  let component: RippleComponent;
  let fixture: ComponentFixture<RippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
