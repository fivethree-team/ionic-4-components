import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivOverlay } from './overlay.component';
import { FivOverlayContent } from './overlay-content/overlay-content.component';
import { FivOverlayService } from './overlay.service';

@NgModule({
  declarations: [FivOverlay, FivOverlayContent],
  imports: [CommonModule],
  exports: [FivOverlay, FivOverlayContent],
  entryComponents: [FivOverlayContent],
  providers: [FivOverlayService]
})
export class FivOverlayModule {}
