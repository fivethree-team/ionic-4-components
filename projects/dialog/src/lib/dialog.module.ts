import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {Hammer} from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_VERTICAL,threshold: 3 },
  };
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
  }
  ]
})
export class DialogModule { }
