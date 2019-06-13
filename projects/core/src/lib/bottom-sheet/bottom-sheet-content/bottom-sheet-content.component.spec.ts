import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivBottomSheetContent } from './bottom-sheet-content.component';

describe('BottomSheetContentComponent', () => {
  let component: FivBottomSheetContent;
  let fixture: ComponentFixture<FivBottomSheetContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivBottomSheetContent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivBottomSheetContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
