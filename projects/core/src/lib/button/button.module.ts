import { FivButton } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FivIconModule } from '../icon/icon.module';

@NgModule({
    declarations: [FivButton],
    imports: [
        CommonModule,
        FivIconModule,
        IonicModule
    ],
    exports: [FivButton],
})
export class FivButtonModule { }
