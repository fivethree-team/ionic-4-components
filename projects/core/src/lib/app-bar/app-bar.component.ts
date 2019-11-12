import { FivFab } from './../fab/fab.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Host,
  ContentChild,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { AppBarTitleLayout, AppBarFabPosition } from '../interfaces';
import { IonTabs } from '@ionic/angular';
import { FivAppBarFabDirective } from './app-bar-fab.directive';
import { fromEvent, merge, Subject } from 'rxjs';
import { TabButtonClickEventDetail } from '@ionic/core';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class FivAppBar implements OnInit, AfterContentInit, OnDestroy {
  _fabVisible = true;
  cutoutVisible = true;
  _position: AppBarFabPosition;
  transitioning = false;

  @ViewChild('fab', { static: false }) fab: FivFab;
  @Input() titleLayout: AppBarTitleLayout = 'hide';
  @Output() fivFabClick = new EventEmitter<FivAppBar>();
  @ContentChild(FivAppBarFabDirective, { static: false })
  fivFab: FivAppBarFabDirective;

  onDestroy$ = new Subject();

  constructor(public router: Router, @Host() public ionTabs: IonTabs) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  ngAfterContentInit(): void {
    // merge(...this.tabs.map(tab => tab.ionTabButtonClick))
    //   .pipe(
    //     tap((event: TabButtonClickEventDetail) =>
    //       this.ionTabButtonClick(event)
    //     ),
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe();
  }

  fabClick() {
    this.fivFabClick.emit(this);
  }

  ionTabButtonClick(event: TabButtonClickEventDetail) {
    this.ionTabs.select(event.tab);
  }
}
