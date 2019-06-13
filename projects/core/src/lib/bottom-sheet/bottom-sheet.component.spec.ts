import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivBottomSheet } from './bottom-sheet.component';

describe('BottomSheetComponent', () => {
  let component: FivBottomSheet;
  let fixture: ComponentFixture<FivBottomSheet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivBottomSheet]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivBottomSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
