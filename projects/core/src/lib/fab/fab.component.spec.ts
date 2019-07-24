import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivFab } from './fab.component';

describe('LoadingFabComponent', () => {
  let component: FivFab;
  let fixture: ComponentFixture<FivFab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivFab]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivFab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
