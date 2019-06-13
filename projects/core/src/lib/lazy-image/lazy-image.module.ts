import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivLazyImage } from './lazy-image.directive';

@NgModule({
  declarations: [FivLazyImage],
  imports: [CommonModule],
  exports: [FivLazyImage]
})
export class FivLazyImageModule {}
