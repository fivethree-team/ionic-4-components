import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';

describe('PopoverPage', () => {
  let component: PopoverPage;
  let fixture: ComponentFixture<PopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
