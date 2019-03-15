import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FivRoutingStateService {

  private history = [];

  constructor(
    private router: Router
  ) {
    console.log('####');
  }

  public loadRouting(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(event => console.log(event))
      )
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        this.history = [...this.history, urlAfterRedirects];
        console.log(this.history);
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(defaultHref = '/'): string {
    return this.history[this.history.length - 2] || defaultHref;
  }
  public getCurrentUrl(): string {
    return this.history[this.history.length - 1];
  }
}
