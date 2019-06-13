import { FivEditableLabelModule } from './../../../../projects/core/src/lib/editable-label/editable-label.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditableLabelPage } from './editable-label.page';
import { ComponentsModule } from '@components/components.module';

const routes: Routes = [
  {
    path: '',
    component: EditableLabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FivEditableLabelModule
  ],
  declarations: [EditableLabelPage]
})
export class EditableLabelPageModule {}
