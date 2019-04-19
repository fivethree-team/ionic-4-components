import { FivPasswordInputModule } from '@fivethree/core';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PasswordPage } from './password.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivPasswordInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule {}
