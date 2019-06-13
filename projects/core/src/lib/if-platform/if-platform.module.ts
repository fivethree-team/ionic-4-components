import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivIfPlatform } from './if-platform.directive';

@NgModule({
  declarations: [FivIfPlatform],
  imports: [CommonModule],
  exports: [FivIfPlatform]
})
export class FivIfModule {}
