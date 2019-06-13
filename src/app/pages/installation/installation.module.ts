import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InstallationPage } from './installation.page';
import { ComponentsModule } from '@components/components.module';

const routes: Routes = [
  {
    path: '',
    component: InstallationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [InstallationPage]
})
export class InstallationPageModule {}
