import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivBackButton } from './back-button.component';
import { FivRoutingStateService } from './routing-state.service';
import { FivIconModule } from '../icon/icon.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [FivBackButton],
    imports: [
        CommonModule,
        FivIconModule,
        IonicModule
    ],
    exports: [FivBackButton],
    providers: [FivRoutingStateService],
})
export class FivBackButtonModule { }
