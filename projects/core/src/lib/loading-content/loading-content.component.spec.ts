import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivLoadingContent } from './loading-content.component';

describe('LoadingContentComponent', () => {
  let component: FivLoadingContent;
  let fixture: ComponentFixture<FivLoadingContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivLoadingContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivLoadingContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
