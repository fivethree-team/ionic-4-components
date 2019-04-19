import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivScrollVanishDirective } from './scroll-vanish.directive';

@NgModule({
    declarations: [FivScrollVanishDirective],
    imports: [CommonModule],
    exports: [FivScrollVanishDirective],
})
export class FivScrollVanishModule { }
