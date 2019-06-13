import { FivPermissions } from './permissions.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FivPermissions],
  imports: [CommonModule],
  exports: [FivPermissions]
})
export class FivPermissionsModule {}
