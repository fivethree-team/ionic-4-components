import { LoadingFabComponent } from './../loading-fab/loading-fab.component';
import {
  Component,
  OnInit, Input,
  ViewChild, Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  TemplateRef,
  AfterViewInit
} from '@angular/core';
import { AppBarTabComponent } from '../app-bar-tab/app-bar-tab.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AppBarTabContentComponent } from '../app-bar-tab-content/app-bar-tab-content.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit, AfterViewInit {

  _fabVisible = true;
  cutoutVisible = true;
  _position: 'right' | 'left' | 'center';
  left = false;
  right = false;
  transitioning = false;
  @ViewChild('fab') fab: LoadingFabComponent;
  @Input() icon = 'md-add';
  @Output() fivFabClick = new EventEmitter<AppBarComponent>();

  @ContentChildren(AppBarTabComponent) tabs: QueryList<AppBarTabComponent>;

  @Input()
  set position(position: 'right' | 'left' | 'center') {
    console.log('set position', position, !position, this._position);
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
    this._position = position;
  }
  get position() {
    return this._position;
  }

  @Input()
  set fabVisible(fabVisible: boolean) {
    if (this._fabVisible === true && fabVisible === false) {
      console.log('hide fab');
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



  constructor(public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }



  onFabHidden() {
    console.log('fab hidden');

    console.log('to void');
    if (this.transitioning) {
      console.log('while transitioning to position', this._position);
      this.setPosition();
      console.log('remove cutout');
      this.cutoutVisible = false;
      setTimeout(() => {
        console.log('show cutout again');
        this.cutoutVisible = true;
        setTimeout(() => {
          console.log('show fab again and end transition');
          this._fabVisible = true;
          this.transitioning = false;
        }, 225);
      }, 225);
    } else {
      this.cutoutVisible = false;
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
}
