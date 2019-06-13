import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivCenter } from './center.directive';

@NgModule({
  declarations: [FivCenter],
  imports: [CommonModule],
  exports: [FivCenter]
})
export class FivCenterModule {}
