import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterItemComponent } from './router-item.component';

describe('RouterItemComponent', () => {
  let component: RouterItemComponent;
  let fixture: ComponentFixture<RouterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
