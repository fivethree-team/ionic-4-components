import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivOverflowButtons } from './overflow-buttons.component';

describe('FivOverflowButtons', () => {
  let component: FivOverflowButtons;
  let fixture: ComponentFixture<FivOverflowButtons>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivOverflowButtons]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivOverflowButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
