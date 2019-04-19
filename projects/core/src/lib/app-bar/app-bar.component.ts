import { FivAppBarTabContent } from './app-bar-tab-content/app-bar-tab-content.component';
import { FivLoadingFab } from './../loading-fab/loading-fab.component';
import {
  Component,
  OnInit, Input,
  ViewChild, Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterViewInit,
  AfterContentInit,
  Host,
  ViewChildren
} from '@angular/core';
import { FivAppBarTab } from './app-bar-tab/app-bar-tab.component';
import { Router } from '@angular/router';
import { AppBarTitleLayout, AppBarFabPosition } from '../interfaces';
import { IonTabs } from '@ionic/angular';
import { TabButtonClickEventDetail } from '@ionic/core';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class FivAppBar implements OnInit, AfterViewInit, AfterContentInit {

  _fabVisible = true;
  cutoutVisible = true;
  _position: AppBarFabPosition;
  left = false;
  right = false;
  transitioning = false;
  tabsRight: FivAppBarTab[];
  tabsLeft: FivAppBarTab[];

  @ViewChild('fab') fab: FivLoadingFab;
  @Input() icon = 'md-add';
  @Input() titleLayout: AppBarTitleLayout = 'hide';
  @Output() fivFabClick = new EventEmitter<FivAppBar>();
  @ViewChildren(FivAppBarTabContent) _tabs: QueryList<FivAppBarTabContent>;

  @ContentChildren(FivAppBarTab) tabComponents: QueryList<FivAppBarTab>;

  @Input()
  set position(position: AppBarFabPosition) {

    if (!position) {
      return;
    }

    if (!this.fabVisible) {
      this._position = position;
      this.setPosition();
      return;
    }

    this._fabVisible = false;
    this.transitioning = true;
    if (!this._position) {
      this._position = position;
      this.onFabHidden();
      return;
    }
    this.prepareTabs(position);
    this._position = position;
  }
  get position() {
    return this._position;
  }

  @Input()
  set fabVisible(fabVisible: boolean) {
    if (this._fabVisible === true && fabVisible === false) {

      this._fabVisible = false;
    } else if (this._fabVisible === false && fabVisible === true) {
      this.cutoutVisible = true;
      setTimeout(() => {
        this._fabVisible = true;
      }, 250);
    }
  }
  get fabVisible() {
    return this._fabVisible;
  }



  constructor(public router: Router, @Host() public tabs: IonTabs) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit() {
    this.prepareTabs(this.position);
  }

  onFabHidden() {



    if (this.transitioning) {

      this.setPosition();

      this.cutoutVisible = false;
      setTimeout(() => {

        this.cutoutVisible = true;
        setTimeout(() => {

          this._fabVisible = true;
          this.transitioning = false;
        }, 225);
      }, 225);
    } else {
      this.cutoutVisible = false;
    }
  }

  private prepareTabs(position: AppBarFabPosition) {
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
  }

  private setPosition() {
    if (this._position === 'right') {
      this.right = true;
      this.left = false;
    } else if (this._position === 'left') {
      this.right = false;
      this.left = true;
    } else {
      this.right = false;
      this.left = false;
    }
  }

  fabClick() {
    this.fivFabClick.emit(this);
  }

  ionTabButtonClick(event: TabButtonClickEventDetail) {
    this.tabs.select(event.tab);
  }
}
