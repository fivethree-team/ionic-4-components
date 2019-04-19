import { FivCenterModule } from '../center/center.module';
import { FivIconModule } from './../icon/icon.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivLoadingFab } from './loading-fab.component';
import { FivLoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';

@NgModule({
    declarations: [FivLoadingFab],
    imports: [CommonModule,
        FivCenterModule,
        FivIconModule,
        FivLoadingSpinnerModule,
        IonicModule],
    exports: [FivLoadingFab],
    providers: [],
})
export class FivLoadingFabModule { }
