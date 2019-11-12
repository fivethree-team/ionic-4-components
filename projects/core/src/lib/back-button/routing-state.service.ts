import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap, takeWhile } from 'rxjs/operators';
import { NavController, Platform } from '@ionic/angular';
import { Navigateable } from '../interfaces';
import { fromEvent, zip, race, from } from 'rxjs';

export interface RoutingStateConfig {
  clearOn: string[];
  root: string;
}

@Injectable({
  providedIn: 'root'
})
export class FivRoutingStateService {
  private history: (string | Navigateable)[] = [];
  private config: RoutingStateConfig;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform
  ) {}

  public loadRouting(config?: RoutingStateConfig): void {
    this.config = config;
    this.handleAndroidBackButton();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        if (urlAfterRedirects === this.getPreviousUrl(this.config.root)) {
          this.pop();
          this.pop();
        }
        // add url to history
        this.history.push(urlAfterRedirects);
        if (this.config && this.config.clearOn) {
          const clear = this.config.clearOn.some(s => s === urlAfterRedirects);
          if (clear) {
            this.clearHistory(urlAfterRedirects);
          }
        }
      });
  }

  registerNavigateable(target: Navigateable) {
    if (isNavigateable(target)) {
      this.history.push(target);
    }
  }

  handleAndroidBackButton() {
    this.platform.backButton
      .pipe(filter(() => !isNavigateable(this.getCurrentUrl())))
      .subscribe(event => {
        this.goBack();
      });

    this.platform.backButton
      .pipe(filter(() => isNavigateable(this.getCurrentUrl())))
      .subscribe(event => {
        event.register(99999, () => {
          this.goBack('/');
        });
      });
  }

  public getHistory(): (string | Navigateable)[] {
    return this.history;
  }

  public getPreviousUrl(defaultHref = '/'): string | Navigateable {
    if (this.history.length >= 2) {
      return this.history[this.history.length - 2];
    }
    return defaultHref;
  }

  public pop(): string | Navigateable {
    return this.history.pop();
  }

  public clearHistory(fromUrl: string) {
    this.history = this.history.filter(h =>
      this.config.clearOn.some(s => s === h)
    );
    if (fromUrl !== this.config.root) {
      this.history.push(fromUrl);
    }
    this.history = this.history
      .reverse()
      .filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
      })
      .reverse();
    if (this.history[0] !== this.config.root) {
      this.history = [this.config.root, ...this.history];
    }
  }

  public getCurrentUrl(): string | Navigateable {
    return this.history[this.history.length - 1];
  }

  goBack(defaultHref = '/') {
    if (this.getHistory().length <= 1) {
      // close the app because we are at root level
      return navigator['app']
        ? navigator['app'].exitApp()
        : this.navCtrl.navigateBack(defaultHref);
    }
    const current = this.getCurrentUrl();
    if (typeof current !== 'string' && isNavigateable(current)) {
      current.dismiss();
      return this.pop();
    }

    const previous = this.getPreviousUrl(defaultHref);
    if (typeof previous === 'string') {
      return this.navCtrl.navigateBack(previous);
    }
    if (isNavigateable(previous)) {
      return this.navCtrl.navigateBack(this.getLatestUrl(defaultHref));
    }
  }

  getLatestUrl(defaultHref: string): string {
    const urls = this.history.filter(e => !!(typeof e === 'string'));
    const latest = urls[urls.length - 1];
    if (urls.length > 0 && latest && typeof latest === 'string') {
      return latest;
    }
    return defaultHref;
  }
}

export function isNavigateable(object: any): boolean {
  return !!object && object.dismiss !== undefined;
}
