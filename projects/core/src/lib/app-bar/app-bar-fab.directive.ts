import { Directive, Input } from '@angular/core';
import { AppBarFabPosition } from '../interfaces';

@Directive({
  selector: '[fivAppBarFab]',
  exportAs: 'fivAppBarFab'
})
export class FivAppBarFabDirective {
  @Input() fivAppBarFab: AppBarFabPosition;
}
