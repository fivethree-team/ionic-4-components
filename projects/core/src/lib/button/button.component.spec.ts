import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivButton } from './button.component';

describe('ButtonComponent', () => {
  let component: FivButton;
  let fixture: ComponentFixture<FivButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
