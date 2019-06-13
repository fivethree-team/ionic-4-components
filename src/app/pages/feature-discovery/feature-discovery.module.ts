import { FivFeatureDiscoveryModule, FivIconModule } from '@fivethree/core';
import { FeatureDiscoveryPage } from './feature-discovery.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: FeatureDiscoveryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FivFeatureDiscoveryModule,
    FivIconModule
  ],
  declarations: [FeatureDiscoveryPage]
})
export class FeatureDirectoryPageModule {}
