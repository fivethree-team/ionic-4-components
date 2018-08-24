import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapWebNativePage } from './map-web-native.page';
import { GoogleMapsModule } from 'dist/google-maps';

const routes: Routes = [
  {
    path: '',
    component: MapWebNativePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapWebNativePage]
})
export class MapWebNativePageModule {}
