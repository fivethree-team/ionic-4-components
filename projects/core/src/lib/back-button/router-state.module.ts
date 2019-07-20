import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivBackButton } from './back-button.component';
import { FivIconModule } from '../icon/icon.module';
import { IonicModule } from '@ionic/angular';
import {
  FivRouterStateOptions,
  USER_OPTIONS,
  FIV_ROUTER_STATE_OPTIONS
} from './symbols';
import { FivRouterStateService } from './router-state.service';

export function routerOptionsFactory(
  options: FivRouterStateOptions
): FivRouterStateOptions {
  return {
    root: '/',
    clearOn: ['/'],
    ...options
  };
}

@NgModule({
  declarations: [FivBackButton],
  imports: [CommonModule, FivIconModule, IonicModule],
  exports: [FivBackButton]
})
export class FivRouterStateModule {
  static forRoot(
    options?: FivRouterStateOptions
  ): ModuleWithProviders<FivRouterStateModule> {
    return {
      ngModule: FivRouterStateModule,
      providers: [
        FivRouterStateService,
        {
          provide: USER_OPTIONS,
          useValue: options
        },
        {
          provide: FIV_ROUTER_STATE_OPTIONS,
          useFactory: routerOptionsFactory,
          deps: [USER_OPTIONS]
        }
      ]
    };
  }
}
