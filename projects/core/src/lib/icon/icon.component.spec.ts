import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivIcon } from './icon.component';

describe('IconComponent', () => {
  let component: FivIcon;
  let fixture: ComponentFixture<FivIcon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivIcon]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
