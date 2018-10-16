import { CommonModule } from '@angular/common';
import { GoogleMapsWebComponent } from './web/google-maps-web';
import { NgModule } from '@angular/core';
import { GoogleMapsComponent } from './google-maps.component';
import { GoogleMapsNativeComponent } from './native/google-maps-native';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleMapsComponent,
    GoogleMapsWebComponent,
    GoogleMapsNativeComponent
  ],
  exports: [
    GoogleMapsComponent,
    GoogleMapsWebComponent,
    GoogleMapsNativeComponent
  ]
})
export class GoogleMapsModule { }
