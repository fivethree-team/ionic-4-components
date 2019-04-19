import { FivToolbarSearch } from './toolbar-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FivIconModule } from '../icon/icon.module';

@NgModule({
    declarations: [FivToolbarSearch],
    imports: [CommonModule,
        IonicModule,
        FivIconModule],
    exports: [FivToolbarSearch,
        // Re-export `FivIconModule`
        FivIconModule],
})
export class FivToolbarSearchModule { }
