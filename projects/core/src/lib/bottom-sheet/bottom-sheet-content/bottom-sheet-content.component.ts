import { IonContent } from '@ionic/angular';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { DrawerState } from '../drawer-state';

@Component({
  selector: 'fiv-bottom-sheet-content',
  templateUrl: './bottom-sheet-content.component.html',
  styleUrls: ['./bottom-sheet-content.component.scss']
})
export class FivBottomSheetContent implements OnInit, AfterViewInit {
  @Input() rounded = true;
  @Input() handle = true;
  @Input() float = true;

  @Output() fivClick: EventEmitter<any> = new EventEmitter();

  @ViewChild(IonContent, { static: true }) content: IonContent;

  currentState: DrawerState;
  states = DrawerState;
  shouldBounce = true;
  panning = false;

  @HostBinding('class.rounded') get isRounded(): boolean {
    switch (this.currentState) {
      case DrawerState.Top:
        return false;
      case DrawerState.Docked:
        return this.rounded;
      case DrawerState.Bottom:
        return this.rounded && !this.float;
    }
    return true;
  }

  @HostBinding('style') get styles(): SafeStyle {
    if (!(this.float && this.currentState === DrawerState.Bottom)) {
      return this.sanitizer
        .bypassSecurityTrustStyle(`box-shadow: 0 4px 16px rgba(0, 0, 0, .12);
                                                      border-top: 1px solid var(--ion-color-light);`);
    }
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.content.scrollEvents = true;
  }

  updateState(state: DrawerState): any {
    this.currentState = state;
  }

  click() {
    this.fivClick.emit();
  }
}
