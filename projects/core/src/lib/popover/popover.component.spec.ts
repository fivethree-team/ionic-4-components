import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FivPopover } from './popover.component';

describe('FivPopover', () => {
  let component: FivPopover;
  let fixture: ComponentFixture<FivPopover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FivPopover],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FivPopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
