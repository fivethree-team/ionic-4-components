import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivToolbarSearch } from './toolbar-search.component';

describe('ToolbarSearchComponent', () => {
  let component: FivToolbarSearch;
  let fixture: ComponentFixture<FivToolbarSearch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivToolbarSearch ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivToolbarSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
