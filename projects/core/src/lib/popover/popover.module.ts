import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivPopover } from './popover.component';
import { FivOverlayModule } from '../overlay/overlay.module';
import { AnimationsModule } from '@fivethree/ngx-rxjs-animations';
import { FivPopoverElementDirective } from './popover-element.directive';

@NgModule({
  declarations: [FivPopover, FivPopoverElementDirective],
  imports: [CommonModule, AnimationsModule, FivOverlayModule],
  exports: [FivPopover, FivPopoverElementDirective]
})
export class FivPopoverModule {}
