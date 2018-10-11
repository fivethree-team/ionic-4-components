import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetContentComponent } from './bottom-sheet-content.component';

describe('BottomSheetContentComponent', () => {
  let component: BottomSheetContentComponent;
  let fixture: ComponentFixture<BottomSheetContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
