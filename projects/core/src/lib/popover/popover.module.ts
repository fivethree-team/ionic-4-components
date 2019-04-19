import { FivButtonModule } from './../button/button.module';
import { FivPopover } from './popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [FivPopover],
    imports: [
        CommonModule,
        FivButtonModule,
        IonicModule
    ],
    exports: [FivPopover],
    entryComponents: [FivPopover]
})
export class FivPopoverModule { }
