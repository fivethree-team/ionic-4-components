import { GoogleMapsModule } from '@fivethree/google-maps';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NativeMapPage } from './native-map.page';

const routes: Routes = [
  {
    path: '',
    component: NativeMapPage
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
  declarations: [NativeMapPage]
})
export class NativeMapPageModule {}
