import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivImageViewer } from './image-viewer.component';

describe('FivImageViewer', () => {
  let component: FivImageViewer;
  let fixture: ComponentFixture<FivImageViewer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivImageViewer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivImageViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
