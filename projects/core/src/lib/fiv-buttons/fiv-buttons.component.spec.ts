import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivButtonsComponent } from './fiv-buttons.component';

describe('FivButtonsComponent', () => {
  let component: FivButtonsComponent;
  let fixture: ComponentFixture<FivButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
