import { FivPull } from './pull.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FivPull],
  imports: [CommonModule],
  exports: [FivPull]
})
export class FivPullModule {}
