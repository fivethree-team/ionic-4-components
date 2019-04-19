import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DrawerState } from '../drawer-state';

@Component({
  selector: 'fiv-bottom-sheet-content',
  templateUrl: './bottom-sheet-content.component.html',
  styleUrls: ['./bottom-sheet-content.component.scss']
})
export class FivBottomSheetContent implements OnInit {

  @Input() rounded = true;
  @Input() handle = true;
  @Input() float = true;

  @Output() fivHandleClick: EventEmitter<any> = new EventEmitter();

  currentState: DrawerState;
  states = DrawerState;

  @HostBinding('class.rounded') get isRounded(): boolean {
    switch (this.currentState) {
      case DrawerState.Top: return false;
      case DrawerState.Docked: return this.rounded;
      case DrawerState.Bottom: return this.rounded && !this.float;
    }
    return true;
  }

  @HostBinding('style') get styles(): SafeStyle {
    if (!(this.float && this.currentState === DrawerState.Bottom)) {
      return this.sanitizer.bypassSecurityTrustStyle(`box-shadow: 0 4px 16px rgba(0, 0, 0, .12);
                                                      border-top: 1px solid var(--ion-color-light);`);
    }
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  updateState(state: DrawerState): any {

    this.currentState = state;
  }

  click() {
    this.fivHandleClick.emit();
  }

}
