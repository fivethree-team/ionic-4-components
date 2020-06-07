import { Component, ContentChild, Input } from '@angular/core';
import { FivAppBarFabDirective } from './app-bar-fab.directive';
import { AppBarTitleMode } from '../interfaces';

@Component({
  selector: 'fiv-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class FivAppBar {
  cutoutVisible = true;

  @Input() titleMode: AppBarTitleMode;

  @ContentChild(FivAppBarFabDirective, { static: false })
  fivFab: FivAppBarFabDirective;

  constructor() {}
}
