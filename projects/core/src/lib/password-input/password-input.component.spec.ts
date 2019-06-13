import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivPasswordInput } from './password-input.component';

describe('FivPasswordInput', () => {
  let component: FivPasswordInput;
  let fixture: ComponentFixture<FivPasswordInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivPasswordInput]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivPasswordInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
