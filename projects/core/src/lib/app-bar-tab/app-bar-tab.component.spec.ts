import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarTabComponent } from './app-bar-tab.component';

describe('AppBarTabComponent', () => {
  let component: AppBarTabComponent;
  let fixture: ComponentFixture<AppBarTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
