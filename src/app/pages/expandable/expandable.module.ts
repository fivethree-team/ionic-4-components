import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpandablePage } from './expandable.page';
import { FivethreeCoreModule } from '@fivethree/core';
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
    FivethreeCoreModule,
    ComponentsModule
  ],
  declarations: [ExpandablePage]
})
export class ExpandablePageModule {}
