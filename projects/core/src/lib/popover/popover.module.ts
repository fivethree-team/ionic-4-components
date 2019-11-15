import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivPopover } from './popover.component';
import { FivOverlayModule } from '../overlay/overlay.module';
import { PopoverElementDirective } from './popover-element.directive';
import { AnimationsModule } from '@fivethree/ngx-rxjs-animations';

@NgModule({
  declarations: [FivPopover, PopoverElementDirective],
  imports: [CommonModule, AnimationsModule, FivOverlayModule],
  exports: [FivPopover, PopoverElementDirective]
})
export class FivPopoverModule {}
