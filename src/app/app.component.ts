import { Component, Inject } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FivRoutingStateService } from '@fivethree/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public docs = [
    {
      title: 'App Bar',
      url: '/app-bar'
    },
    {
      title: 'Bottom Sheet',
      url: '/bottom-sheet'
    },
    {
      title: 'Dialog',
      url: '/dialog'
    },
    {
      title: 'Floating Action Button',
      url: '/fab'
    },
    {
      title: 'Feature Discovery',
      url: '/feature-discovery'
    },
    {
      title: 'Gallery',
      url: '/gallery'
    },
    {
      title: 'Icon',
      url: '/icon'
    },
    {
      title: 'Password Input',
      url: '/password'
    },
    {
      title: 'Popover',
      url: '/popover'
    },
    {
      title: 'Refresher',
      url: '/refresher'
    },
    {
      title: 'Searchbar',
      url: '/searchbar'
    },
    {
      title: 'Stepper',
      url: '/stepper'
    }
  ];
  public services = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private routing: FivRoutingStateService,
    private navCtrl: NavController,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.routing.loadRouting({ clearOn: ['/'], root: '/' });
      this.setupThemeListener();
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

  private setupThemeListener() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleTheme(prefersDark.matches);

    prefersDark.addEventListener('change', mediaQuery =>
      this.toggleTheme(mediaQuery.matches)
    );
  }

  private toggleTheme(shouldAdd: boolean) {
    this.document.body.classList.toggle('dark', shouldAdd);
  }
}
