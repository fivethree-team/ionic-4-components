import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'App Bar',
    //   url: '/app-bar',
    //   icon: 'git-commit'
    // },
    // {
    //   title: 'Bottom Sheet',
    //   url: '/bottom-sheet',
    //   icon: 'ios-arrow-up'
    // },
    // {
    //   title: 'Dialog',
    //   url: '/dialog',
    //   icon: 'notifications'
    // },
    // {
    //   title: 'Expandable',
    //   url: '/expandable',
    //   icon: 'resize'
    // },
    // {
    //   title: 'Icon',
    //   url: '/icon',
    //   icon: 'mail-unread'
    // },
    // {
    //   title: 'Image View',
    //   url: '/image',
    //   icon: 'image'
    // },
    {
      title: 'Loading Indicators',
      url: '/loading',
      icon: 'time'
    },
    // {
    //   title: 'Map',
    //   url: '/map',
    //   icon: 'map'
    // },
    {
      title: 'Password Item',
      url: '/password',
      icon: 'key'
    },
    // {
    //   title: 'Refresher',
    //   url: '/refresh',
    //   icon: 'refresh'
    // },
    // {
    //   title: 'Searchbar',
    //   url: '/toolbar-search',
    //   icon: 'search'
    // },
    {
      title: 'Stepper',
      url: '/stepper',
      icon: 'share'
    },
    // {
    //   title: 'Directives',
    //   url: '/directives',
    //   icon: 'rocket'
    // },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'more'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
