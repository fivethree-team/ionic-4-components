import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
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
  AfterViewInit,
  AfterContentInit,
  Host,
  ViewChildren,
  ContentChild
} from '@angular/core';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { Router } from '@angular/router';
import { AppBarTitleLayout, AppBarFabPosition } from '../interfaces';
import { IonTabs } from '@ionic/angular';
import { TabButtonClickEventDetail } from '@ionic/core';
import { FivAppBarFabDirective } from './app-bar-fab.directive';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class FivAppBar implements OnInit, AfterContentInit {
  _fabVisible = true;
  cutoutVisible = true;
  _position: AppBarFabPosition;
  transitioning = false;
  tabsRight: FivAppBarTab[];
  tabsLeft: FivAppBarTab[];

  @ViewChild('fab') fab: FivFab;
  @Input() icon = 'md-add';
  @Input() titleLayout: AppBarTitleLayout = 'hide';
  @Output() fivFabClick = new EventEmitter<FivAppBar>();
  @ViewChildren(FivAppBarTabContent) _tabs: QueryList<FivAppBarTabContent>;

  @ContentChild(FivAppBarFabDirective) fivFab: FivAppBarFabDirective;

  @ContentChildren(FivAppBarTab)
  tabComponents: QueryList<FivAppBarTab>;

  constructor(public router: Router, @Host() public tabs: IonTabs) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.prepareTabs();
  }

  private prepareTabs() {
    const position = this.fivFab.position;
    console.log('position', position);
    if (position === 'center') {
      this.tabsLeft = this.tabComponents.toArray().slice(0, 2);
      this.tabsRight = this.tabComponents.toArray().slice(2, 4);
    } else if (position === 'right') {
      this.tabsLeft = this.tabComponents.toArray();
      this.tabsRight = [];
    } else if (position === 'left') {
      this.tabsLeft = [];
      this.tabsRight = this.tabComponents.toArray();
    }

    console.log('tabs', this.tabsLeft, this.tabsRight);
  }

  fabClick() {
    this.fivFabClick.emit(this);
  }

  ionTabButtonClick(event: TabButtonClickEventDetail) {
    this.tabs.select(event.tab);
  }
}
