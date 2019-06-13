import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivAppBar } from './app-bar.component';

describe('AppBarComponent', () => {
  let component: FivAppBar;
  let fixture: ComponentFixture<FivAppBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivAppBar]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivAppBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
