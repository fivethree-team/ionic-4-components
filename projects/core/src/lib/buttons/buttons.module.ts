import { FivButtons } from './buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivButtonModule } from '../button/button.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [FivButtons],
    imports: [
        CommonModule,
        FivButtonModule,
        IonicModule
    ],
    exports: [
        FivButtons,
        // Re-export `FivButtonModule` as `FivButton` will be used
        // inside of `FivButtons`
        FivButtonModule
    ]
})
export class FivButtonsModule { }
