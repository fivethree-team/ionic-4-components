import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivAppBarTab } from './app-bar-tab.component';

describe('AppBarTabComponent', () => {
  let component: FivAppBarTab;
  let fixture: ComponentFixture<FivAppBarTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivAppBarTab]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivAppBarTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
