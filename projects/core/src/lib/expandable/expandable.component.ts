import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'fiv-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  animations: [
    trigger('listAnim', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0', opacity: 0 })),
      transition(
        'closed => open',
        [
          animate(
            '{{time}}',
            keyframes([
              style({ height: '0', opacity: 0, offset: 0 }),
              style({ height: '*', opacity: 0.1, offset: 0.8 }),
              style({ height: '*', opacity: 1, offset: 1 })
            ])
          )
        ],
        { params: { time: '270ms ease-out' } }
      ),
      transition(
        'open => closed',
        [
          animate(
            '{{time}}',
            keyframes([
              style({ height: '*', opacity: 1, offset: 0 }),
              style({ height: '*', opacity: 0.1, offset: 0.2 }),
              style({ height: '0', opacity: 0, offset: 1 })
            ])
          )
        ],
        { params: { time: '220ms ease-out' } }
      )
    ])
  ]
})
export class FivExpandable implements OnInit {
  @Input() isOpen = false;
  @Input() timingFunction: string;
  @Output() fivWillOpen: EventEmitter<FivExpandable> = new EventEmitter();
  @Output() fivDidOpen: EventEmitter<FivExpandable> = new EventEmitter();
  @Output() fivWillClose: EventEmitter<FivExpandable> = new EventEmitter();
  @Output() fivDidClose: EventEmitter<{
    expandable: FivExpandable;
    param: any;
  }> = new EventEmitter();

  param: any;

  constructor(private change: ChangeDetectorRef) {}

  ngOnInit() {}

  open() {
    this.fivWillOpen.emit(this);
    this.isOpen = true;
    this.change.detectChanges();
  }

  toggle() {
    if (this.isOpen === false) {
      this.open();
    } else {
      this.close();
    }
  }

  close(param?: any) {
    this.param = param;
    this.fivWillClose.emit(this);

    this.isOpen = false;
    this.change.detectChanges();
  }

  onAnimationEnd(event) {
    if (event.fromState === 'closed') {
      this.fivDidOpen.emit(this);
    } else if (event.fromState === 'open') {
      this.fivDidClose.emit({ expandable: this, param: this.param });
      this.param = null;
    }
  }
}
