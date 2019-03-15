import { FivRoutingStateService } from './../services/routing-state.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'fiv-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class FivBackButton implements OnInit {

  @Input() icon = 'arrow-back';
  @Input() color;
  @Input() defaultHref = '/';

  constructor(
    private platform: Platform,
    public routingState: FivRoutingStateService,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.platform.backButton
      .subscribeWithPriority(9999, () => {
        console.log('android back button click');
        if (this.routingState.getHistory().length <= 1) {
          // close the app because we are at root level
          navigator['app'].exitApp();
        } else {
          // go back
          this.buttonClick();
        }
      });
  }

  buttonClick() {
    this.navCtrl.navigateBack(this.routingState.getPreviousUrl(this.defaultHref))
      .then(() => {
        // pop newly pushed page
        this.routingState.pop();

        // pop back we want to navigate back from
        this.routingState.pop();

      });
  }

}
