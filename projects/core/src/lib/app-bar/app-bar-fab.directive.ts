import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[fivAppBarFab]',
  exportAs: 'fivAppBarFab'
})
export class FivAppBarFabDirective {
  @Input() fivAppBarFab: 'left' | 'center' | 'right';
}
