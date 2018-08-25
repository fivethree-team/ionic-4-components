import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProgressBar } from './progress-bar/progress-bar.component';
import { FabSpinner } from './fab/fab.component';
import { ButtonFull } from './button/button.component';
import { ItemProgress } from './item/item.component';
import { ContentRefresh } from './content/content.component';
import { InfiniteScrollContent } from './infinite-scroll-content/infinite-scrollt-content.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [FabSpinner, ProgressBar, ButtonFull,ItemProgress,ContentRefresh,InfiniteScrollContent],
  exports: [FabSpinner, ProgressBar, ButtonFull, ItemProgress,ContentRefresh,InfiniteScrollContent
  ]
})
export class LoadingModule { }
