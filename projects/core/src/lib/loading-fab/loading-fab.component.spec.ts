import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivLoadingFab } from './loading-fab.component';

describe('LoadingFabComponent', () => {
  let component: FivLoadingFab;
  let fixture: ComponentFixture<FivLoadingFab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivLoadingFab ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivLoadingFab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
