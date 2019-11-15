import { FivFab } from './../fab/fab.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Host,
  ContentChild,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { AppBarTitleLayout, AppBarFabPosition } from '../interfaces';
import { IonTabs } from '@ionic/angular';
import { FivAppBarFabDirective } from './app-bar-fab.directive';
import { Subject } from 'rxjs';
import { TabButtonClickEventDetail } from '@ionic/core';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class FivAppBar implements OnInit, OnDestroy {
  _fabVisible = true;
  cutoutVisible = true;
  _position: AppBarFabPosition;
  transitioning = false;

  @ViewChild('fab', { static: false }) fab: FivFab;
  @Input() titleLayout: AppBarTitleLayout = 'hide';
  @ContentChild(FivAppBarFabDirective, { static: false })
  fivFab: FivAppBarFabDirective;

  onDestroy$ = new Subject();

  constructor(public router: Router, @Host() public ionTabs: IonTabs) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  ionTabButtonClick(event: TabButtonClickEventDetail) {
    this.ionTabs.select(event.tab);
  }
}
