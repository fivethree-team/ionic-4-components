import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivButtons } from './buttons.component';

describe('FivButtonsComponent', () => {
  let component: FivButtons;
  let fixture: ComponentFixture<FivButtons>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivButtons ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
