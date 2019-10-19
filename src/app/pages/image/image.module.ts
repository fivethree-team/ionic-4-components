import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImagePage } from './image.page';
import {
  FivGalleryModule,
  FivSpinnerModule,
  FivCenterModule
} from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: ImagePage
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
  declarations: [ImagePage]
})
export class ImagePageModule {}
