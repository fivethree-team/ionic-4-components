import { CommonModule } from '@angular/common';
import { FivGoogleMapsWeb } from './web/google-maps-web';
import { NgModule } from '@angular/core';
import { FivGoogleMaps } from './google-maps.component';
import { FivGoogleMapsNative } from './native/google-maps-native';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FivGoogleMaps,
    FivGoogleMapsWeb,
    FivGoogleMapsNative
  ],
  exports: [
    FivGoogleMaps,
    FivGoogleMapsWeb,
    FivGoogleMapsNative
  ]
})
export class GoogleMapsModule { }
