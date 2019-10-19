import { ComponentsModule } from '@components/components.module';
import { FivRippleModule } from './../../../projects/core/src/lib/ripple/ripple.module';
import { FivOverlayModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    component: TestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivOverlayModule,
    FivRippleModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TestPage]
})
export class TestPageModule {}
