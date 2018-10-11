import { FivethreeCoreModule } from 'core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolbarSearchPage } from './toolbar-search.page';

const routes: Routes = [
  {
    path: '',
    component: ToolbarSearchPage
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
  declarations: [ToolbarSearchPage]
})
export class ToolbarSearchPageModule {}
