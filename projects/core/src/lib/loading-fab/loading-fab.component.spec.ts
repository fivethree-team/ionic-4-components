import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFabComponent } from './loading-fab.component';

describe('LoadingFabComponent', () => {
  let component: LoadingFabComponent;
  let fixture: ComponentFixture<LoadingFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
