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
    {
      title: 'Components',
      url: '/components',
      icon: 'home'
    },
    {
      title: 'Password Item',
      url: '/password',
      icon: 'key'
    },
    {
      title: 'Toolbar Search',
      url: '/toolbar-search',
      icon: 'search'
    },
    {
      title: 'Loading',
      url: '/loading',
      icon: 'home'
    },
    {
      title: 'Bottom Sheet',
      url: '/bottom-sheet',
      icon: 'home'

    },
    {
      title: 'App Bar',
      url: '/app-bar',
      icon: 'home'
    },
    {
      title: 'Viewport Directive',
      url: '/viewport',
      icon: 'home'
    },
    {
      title: 'Icon',
      url: '/icon',
      icon: 'home'
    },
    {
      title: 'Native Map',
      url: '/native-map',
      icon: 'map'
    },
    {
      title: 'Native Map with Bottom Sheet',
      url: '/native-map-bottom-sheet',
      icon: 'map'
    }
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
