import { FivRippleModule } from './../../../../projects/core/src/lib/ripple/ripple.module';
import { ComponentsModule } from 'src/app/components/components.module';
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
    RouterModule.forChild(routes),
    ComponentsModule,
    FivRippleModule
  ],
  declarations: [ComponentsPage]
})
export class ComponentsPageModule {}
