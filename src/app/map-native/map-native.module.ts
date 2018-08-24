import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapNativePage } from './map-native.page';
import { GoogleMapsModule } from 'dist/google-maps';

const routes: Routes = [
  {
    path: '',
    component: MapNativePage
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
  declarations: [MapNativePage]
})
export class MapNativePageModule {}
