import { FivViewport } from './viewport.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FivViewport],
  imports: [CommonModule],
  exports: [FivViewport]
})
export class FivViewportModule {}
