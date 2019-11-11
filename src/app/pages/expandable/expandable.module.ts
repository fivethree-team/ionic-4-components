import { FivCenterModule } from './../../../../projects/core/src/lib/center/center.module';
import { FivExpandableModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpandablePage } from './expandable.page';
import { ComponentsModule } from '@components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ExpandablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FivExpandableModule,
    FivCenterModule
  ],
  declarations: [ExpandablePage]
})
export class ExpandablePageModule {}
