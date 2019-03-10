import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkStatusPage } from './network-status.page';

describe('NetworkStatusPage', () => {
  let component: NetworkStatusPage;
  let fixture: ComponentFixture<NetworkStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
