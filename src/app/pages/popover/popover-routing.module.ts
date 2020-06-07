import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPage } from './popover.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPageRoutingModule {}
