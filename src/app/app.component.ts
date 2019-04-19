import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FivRoutingStateService } from '@fivethree/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public components = [
    {
      title: 'App Bar',
      url: '/app-bar',
      icon: 'git-commit',
    },
    {
      title: 'Bottom Sheet',
      url: '/bottom-sheet',
      icon: 'ios-arrow-up',
    },
    {
      title: 'Dialog',
      url: '/dialog',
      icon: 'notifications',
    },
    {
      title: 'Editable Label',
      url: '/editable-label',
      icon: 'create',
    },
    {
      title: 'Expandable',
      url: '/expandable',
      icon: 'resize',
    },
    {
      title: 'Feature Discovery',
      url: '/feature-discovery',
      icon: 'resize',
    },
    {
      title: 'Icon',
      url: '/icon',
      icon: 'mail-unread',
    },
    {
      title: 'Image Gallery',
      url: '/image',
      icon: 'image',
    },
    {
      title: 'Loading Indicators',
      url: '/loading',
      icon: 'time',
    },
    {
      title: 'Overflow Buttons',
      url: '/buttons',
      icon: 'more',
    },
    {
      title: 'Password Reveal Input',
      url: '/password',
      icon: 'key',
    },
    {
      title: 'Refresher',
      url: '/refresh',
      icon: 'refresh',
    },
    {
      title: 'Stepper',
      url: '/stepper',
      icon: 'share',
    },
    {
      title: 'Toolbar Search',
      url: '/toolbar-search',
      icon: 'search',
    }
  ];
  public directives = [
  ];
  public services = [
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private routing: FivRoutingStateService
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
}
