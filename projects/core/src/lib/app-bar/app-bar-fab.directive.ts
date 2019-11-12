import { Directive, Host, Input } from '@angular/core';
import { FivFab } from '../fab/fab.component';

@Directive({
  selector: '[fivAppBarFab]'
})
export class FivAppBarFabDirective {
  @Input() position: 'left' | 'center' | 'right';

  constructor(@Host() public fab: FivFab) {}
}
