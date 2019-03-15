import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LanguageService } from './services/language.service';
import { FivRoutingStateService } from '@fivethree/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'App Bar',
      url: '/app-bar',
      icon: 'git-commit',
      shape: 'rounded'
    },
    {
      title: 'Bottom Sheet',
      url: '/bottom-sheet',
      icon: 'ios-arrow-up',
      shape: 'rounded'
    },
    {
      title: 'Dialog',
      url: '/dialog',
      icon: 'notifications'
    },
    {
      title: 'Editable Label',
      url: '/editable-label',
      icon: 'create',
      shape: 'line'
    },
    {
      title: 'Expandable',
      url: '/expandable',
      icon: 'resize',
      shape: 'dot'
    },
    {
      title: 'Icon',
      url: '/icon',
      icon: 'mail-unread',
      shape: 'rounded'
    },
    {
      title: 'Image View',
      url: '/image',
      icon: 'image',
      shape: 'dot'
    },
    {
      title: 'Loading Indicators',
      url: '/loading',
      icon: 'time',
      shape: 'line'
    },
    // {
    //   title: 'Map',
    //   url: '/map',
    //   icon: 'map'
    // },
    {
      title: 'Overflow Buttons',
      url: '/buttons',
      icon: 'more',
      shape: 'rounded'
    },
    {
      title: 'Password Reveal Input',
      url: '/password',
      icon: 'key',
      shape: 'line'
    },
    {
      title: 'Refresher',
      url: '/refresh',
      icon: 'refresh',
      shape: 'dot'
    },
    // {
    //   title: 'Searchbar',
    //   url: '/toolbar-search',
    //   icon: 'search'
    // },
    {
      title: 'Stepper',
      url: '/stepper',
      icon: 'share',
      shape: 'rounded'
    },
    {
      title: 'Test',
      url: '/test',
      icon: 'bug'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private language: LanguageService,
    private routing: FivRoutingStateService
  ) {
    this.language.initializeLanguage();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.routing.loadRouting({ clearOnRoot: true });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
