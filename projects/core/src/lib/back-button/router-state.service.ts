import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavController, Platform } from '@ionic/angular';
import { Navigateable } from '../interfaces';
import { FIV_ROUTER_STATE_OPTIONS, FivRouterStateOptions } from './symbols';

export interface RoutingStateConfig {
  clearOn: string[];
  root: string;
}

@Injectable()
export class FivRouterStateService {
  private history: (string | Navigateable)[] = [];

  constructor(
    @Inject(FIV_ROUTER_STATE_OPTIONS) private _options: FivRouterStateOptions,
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform
  ) {
    console.log(_options);
    console.log(this.history);

    this.setUpAndroidBackButtonListener();
    this.setUpRouterStateListener(_options);
  }

  private setUpRouterStateListener(options: FivRouterStateOptions) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        if (urlAfterRedirects === this.getPreviousUrl(options.root)) {
          this.pop();
          this.pop();
        }
        // add url to history
        this.history.push(urlAfterRedirects);
        if (options.clearOn) {
          const clear = options.clearOn.some(s => s === urlAfterRedirects);
          if (clear) {
            this.clearHistory(urlAfterRedirects);
          }
        }
      });
  }

  private setUpAndroidBackButtonListener() {
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

  registerNavigateable(target: Navigateable) {
    if (isNavigateable(target)) {
      this.history.push(target);
    }
  }

  public getHistory(): (string | Navigateable)[] {
    return this.history;
  }

  public getPreviousUrl(defaultHref = '/'): string | Navigateable {
    if (this.history.length > 2) {
      return this.history[this.history.length - 2];
    }
    return defaultHref;
  }

  public pop(): string | Navigateable {
    return this.history.pop();
  }

  public clearHistory(fromUrl: string) {
    this.history = this.history.filter(h =>
      this._options.clearOn.some(s => s === h)
    );
    if (fromUrl !== this._options.root) {
      this.history.push(fromUrl);
    }
    this.history = this.history
      .reverse()
      .filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
      })
      .reverse();
    if (this.history[0] !== this._options.root) {
      this.history = [this._options.root, ...this.history];
    }
  }

  public getCurrentUrl(): string | Navigateable {
    return this.history[this.history.length - 1];
  }

  goBack(defaultHref = '/') {
    console.log(this.getHistory());
    if (this.getHistory().length <= 1) {
      // close the app because we are at root level
      return navigator['app'].exitApp();
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
