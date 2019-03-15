import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

export interface RoutingStateConfig {
  clearOnRoot?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FivRoutingStateService {

  private history = [];
  private config: RoutingStateConfig;

  constructor(
    private router: Router
  ) {
  }

  public loadRouting(config?: RoutingStateConfig): void {
    this.config = config;
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        // add url to history
        this.history = [...this.history, urlAfterRedirects];
        if (this.config && this.config.clearOnRoot && urlAfterRedirects === '/') {
          // clear on root
          this.clearHistory();
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

  public clearHistory() {
    console.log('clear history');
    this.history = ['/'];
  }

  public getCurrentUrl(): string {
    return this.history[this.history.length - 1];
  }
}
