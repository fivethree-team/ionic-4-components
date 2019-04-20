import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavController, Platform } from '@ionic/angular';

export interface RoutingStateConfig {
  clearOn: string[];
  root: string;
}

@Injectable({
  providedIn: 'root'
})
export class FivRoutingStateService {

  private history: string[] = [];
  private config: RoutingStateConfig;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform
  ) {
  }

  public loadRouting(config?: RoutingStateConfig): void {
    this.config = config;
    this.handleAndroidBackButton();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        if (urlAfterRedirects === this.getPreviousUrl(this.config.root)) {
          
          this.pop();
          this.pop();
        }
        // add url to history
        this.history = [...this.history, urlAfterRedirects];
        if (this.config && this.config.clearOn) {
          const clear = this.config.clearOn.some(s => s === urlAfterRedirects);
          if (clear) {
            this.clearHistory(urlAfterRedirects);
          }
          
        }
      });
  }

  handleAndroidBackButton() {
    this.platform.backButton
      .subscribeWithPriority(9999, () => {
        if (this.getHistory().length <= 1) {
          // close the app because we are at root level
          navigator['app'].exitApp();
        } else {
          // go back
          this.goBack();
        }
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(defaultHref = '/'): string {
    return this.history[this.history.length - 2] || defaultHref;
  }

  public pop(): string {
    return this.history.pop();
  }

  public clearHistory(fromUrl: string) {
    
    this.history = this.history.filter(h => this.config.clearOn.some(s => s === h));
    if (fromUrl !== this.config.root) {
      this.history.push(fromUrl);
    }
    this.history = this.history
      .reverse()
      .filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      })
      .reverse();
    if (this.history[0] !== this.config.root) {
      this.history = [this.config.root, ...this.history];
    }
  }

  public getCurrentUrl(): string {
    return this.history[this.history.length - 1];
  }

  goBack(defaultHref = '/') {
    this.navCtrl.navigateBack(this.getPreviousUrl(defaultHref));
  }
}
