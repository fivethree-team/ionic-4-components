import { FivRouterStateService } from './router-state.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fiv-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class FivBackButton {
  @Input() icon = 'arrow-back';
  @Input() color;
  @Input() defaultHref = '/';

  constructor(public routerState: FivRouterStateService) {}

  buttonClick() {
    this.routerState.goBack(this.defaultHref);
  }
}
