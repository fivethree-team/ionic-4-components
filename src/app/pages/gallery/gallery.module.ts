import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalleryPage } from './gallery.page';
import {
  FivGalleryModule,
  FivSpinnerModule,
  FivCenterModule
} from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FivGalleryModule,
    FivSpinnerModule,
    FivCenterModule
  ],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
