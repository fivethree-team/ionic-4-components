import { ComponentsModule } from './../../components/components.module';
import { FivSearchbarModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchbarPage } from './searchbar.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivSearchbarModule,
    ComponentsModule
  ],
  declarations: [SearchbarPage]
})
export class SearchbarPageModule {}
