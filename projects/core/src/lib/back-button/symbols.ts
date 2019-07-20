import { InjectionToken } from '@angular/core';

export const FIV_ROUTER_STATE_OPTIONS = new InjectionToken(
  'FIV_ROUTER_STATE_OPTIONS'
);

export const USER_OPTIONS = new InjectionToken('USER_OPTIONS');

export interface FivRouterStateOptions {
  /**
   * Root page.
   */
  root: string;

  /**
   * Pages when the state should be cleared.
   */
  clearOn: string[];
}
