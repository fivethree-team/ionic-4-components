import { FivRoutingStateService } from './../services/routing-state.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'fiv-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class FivBackButton implements OnInit, OnDestroy {

  @Input() icon = 'arrow-back';
  @Input() color;
  @Input() defaultHref = '/';

  private androidBackSubscription: Subscription;

  constructor(
    private platform: Platform,
    public routingState: FivRoutingStateService,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.platform.backButton.subscribe((event) => {
      this.buttonClick();
    });
  }

  ngOnDestroy(): void {
    if (this.androidBackSubscription) {
      this.androidBackSubscription.unsubscribe();
    }
  }

  buttonClick() {
    this.navCtrl.navigateBack(this.routingState.getPreviousUrl(this.defaultHref));
  }

}
