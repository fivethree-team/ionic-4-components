import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivDialog } from './dialog.component';

describe('DialogComponent', () => {
  let component: FivDialog;
  let fixture: ComponentFixture<FivDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
