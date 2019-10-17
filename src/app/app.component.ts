import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FivRoutingStateService } from '@fivethree/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public docs = [
    {
      title: 'App Bar',
      url: '/app-bar',
    },
    {
      title: 'Bottom Sheet',
      url: '/bottom-sheet',
    },
    {
      title: 'Dialog',
      url: '/dialog',
    },
    {
      title: 'Editable Label',
      url: '/editable-label',
    },
    {
      title: 'Expandable',
      url: '/expandable',
    },
    {
      title: 'Feature Discovery',
      url: '/feature-discovery',
    },
    {
      title: 'Floating Action Button',
      url: '/fab',
    },
    {
      title: 'Icon',
      url: '/icon',
    },
    {
      title: 'Image Gallery',
      url: '/image',
    },
    {
      title: 'Loading Indicators',
      url: '/loading',
    },
    {
      title: 'Overflow Buttons',
      url: '/buttons',
    },
    {
      title: 'Password Reveal Input',
      url: '/password',
    },
    {
      title: 'Refresher',
      url: '/refresh',
    },
    {
      title: 'Searchbar',
      url: '/toolbar-search',
    },
    {
      title: 'Stepper',
      url: '/stepper',
    },
    {
      title: 'Viewport',
      url: '/viewport',
    }
  ];
  public services = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private routing: FivRoutingStateService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.routing.loadRouting({ clearOn: ['/'], root: '/' });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  navigateRoot(url: string) {
    this.navCtrl.navigateRoot(url);
  }
  navigate(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
