import { ComponentsModule } from '@components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BottomSheetPage } from './bottom-sheet.page';
import {
  FivIfModule,
  FivBottomSheetModule,
  FivIconModule
} from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivBottomSheetModule,
    FivIconModule,
    ComponentsModule,
    FivIfModule
  ],
  declarations: [BottomSheetPage]
})
export class BottomSheetPageModule {}
