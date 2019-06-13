import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivRouterItem } from './router-item.component';

describe('RouterItemComponent', () => {
  let component: FivRouterItem;
  let fixture: ComponentFixture<FivRouterItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivRouterItem]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivRouterItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
