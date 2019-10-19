import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivRefresher } from './refresher.component';

describe('LoadingContentComponent', () => {
  let component: FivRefresher;
  let fixture: ComponentFixture<FivRefresher>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivRefresher]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivRefresher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
