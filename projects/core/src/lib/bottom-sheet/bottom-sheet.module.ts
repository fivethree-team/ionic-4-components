import { FivBottomSheetContent } from './../bottom-sheet-content/bottom-sheet-content.component';
import { FivBottomSheet } from './bottom-sheet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivCenterModule } from '../directives/center.module';

@NgModule({
    declarations: [
        FivBottomSheet,
        FivBottomSheetContent
    ],
    imports: [
        CommonModule,
        FivCenterModule
    ],
    exports: [
        FivBottomSheet,
        FivBottomSheetContent
    ]
})
export class FivBottomSheetModule { }
