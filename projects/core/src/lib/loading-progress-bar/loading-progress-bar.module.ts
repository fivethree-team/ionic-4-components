import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivLoadingProgressBar } from './loading-progress-bar.component';
import { FivLoadingService } from './loading.service';

@NgModule({
  declarations: [FivLoadingProgressBar],
  imports: [CommonModule],
  exports: [FivLoadingProgressBar],
  providers: [FivLoadingService]
})
export class FivLoadingProgressBarModule {}
