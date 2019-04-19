import { FivLoadingSpinnerModule } from './../loading-spinner/loading-spinner.module';
import { FivPullModule } from '../pull/pull.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivLoadingContent } from './loading-content.component';
import { IonicModule } from '@ionic/angular';
import { FivLoadingRefresherContent } from './loading-refresher-content/loading-refresher-content.component';

@NgModule({
    declarations: [
        FivLoadingContent,
        FivLoadingRefresherContent
    ],
    imports: [
        CommonModule,
        FivLoadingSpinnerModule,
        FivPullModule,
        IonicModule
    ],
    exports: [
        FivLoadingContent,
        FivLoadingRefresherContent
    ],
})
export class FivLoadingContentModule { }
