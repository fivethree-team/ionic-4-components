import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSearchComponent } from './toolbar-search.component';

describe('ToolbarSearchComponent', () => {
  let component: ToolbarSearchComponent;
  let fixture: ComponentFixture<ToolbarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
