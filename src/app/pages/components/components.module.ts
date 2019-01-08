import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsPage } from './components.page';
import { FivethreeCoreModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: ComponentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivethreeCoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentsPage]
})
export class ComponentsPageModule {}
