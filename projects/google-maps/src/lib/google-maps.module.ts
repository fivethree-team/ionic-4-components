import { CommonModule } from '@angular/common';
import { GoogleMapWebComponent } from './web/google-map-web';
import { NgModule } from '@angular/core';
import { GoogleMapsComponent } from './google-maps.component';
import { GoogleMapNativeComponent } from './native/google-map-native';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoogleMapsComponent, GoogleMapWebComponent, GoogleMapNativeComponent],
  exports: [GoogleMapsComponent, GoogleMapWebComponent, GoogleMapNativeComponent]
})
export class GoogleMapsModule { }
