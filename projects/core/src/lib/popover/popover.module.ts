import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivPopover } from './popover.component';
import { FivOverlayModule } from '../overlay/overlay.module';

@NgModule({
  declarations: [FivPopover],
  exports: [FivPopover],
  imports: [CommonModule, FivOverlayModule]
})
export class FivPopoverModule {}
