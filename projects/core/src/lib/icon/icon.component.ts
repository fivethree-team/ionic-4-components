import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import {
  trigger,
  transition,
  animate,
  state,
  style
} from '@angular/animations';

@Component({
  selector: 'fiv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rotateAnim', [
      transition('normal => rotate', [animate('125ms ease-out')]),
      transition('rotate => normal', [animate('125ms ease-in')]),
      state(
        'rotate',
        style({ opacity: '0', transform: 'scale(0) rotateZ(45deg)' })
      ),
      state(
        'normal',
        style({ opacity: '1', transform: 'scale(1) rotateZ(0deg)' })
      )
    ]),
    trigger('scaleAnim', [
      transition('void => normal', [
        style({ opacity: '0', transform: 'scale(0)' }),
        animate(
          '125ms ease-out',
          style({ opacity: '1', transform: 'scale(1)' })
        )
      ]),
      transition('normal => scale', [animate('125ms ease-out')]),
      transition('scale => normal', [animate('125ms ease-in')]),
      state('scale', style({ opacity: '0', transform: 'scale(0)' })),
      state('normal', style({ opacity: '1', transform: 'scale(1)' }))
    ])
  ]
})
export class FivIcon implements OnInit {
  _name: string;
  _badge = 0;
  _dot: boolean;
  tempValue: number;
  state: 'normal' | 'rotate' = 'normal';
  temp: string;
  @Input() color: string;

  @Input() slot: string;
  @Input() smallIcon: string;
  @Input() off = false;

  @Input()
  @HostBinding('@.disabled')
  animationDisabled = false;

  @Output() transitionDone = new EventEmitter<string>();

  indicatorState: 'normal' | 'scale' = 'scale';
  badgeState: 'normal' | 'scale' = 'scale';

  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (this._name) {
      this.transform(name);
    } else {
      this._name = name;
    }
  }

  @Input()
  get badge(): number {
    return this._badge;
  }
  set badge(value: number) {
    this.transformIndicator(value);
  }

  @Input()
  set dot(dot: boolean) {
    this._dot = dot;
    if (dot) {
      this.indicatorState = 'normal';
    }
  }
  get dot(): boolean {
    return this._dot;
  }

  constructor() {}

  ngOnInit() {}

  transform(name: string) {
    this.temp = name;
    this.state = 'rotate';
  }

  transformIndicator(value: number) {
    if (this.dot) {
      this._badge = value;
      return;
    }
    if (value === 0) {
      this._badge = value;
      this.badgeState = 'scale';
    } else {
      if (this.badgeState === 'scale') {
        this.badgeState = 'normal';
        this._badge = value;
      } else {
        this.tempValue = value;
        this.badgeState = 'scale';
      }
    }
  }

  rotateAnimDone(event) {
    if (event.fromState === 'normal' && event.toState === 'rotate') {
      this._name = this.temp;
      this.state = 'normal';
    }

    if (event.fromState === 'rotate' && event.toState === 'normal') {
      this.transitionDone.emit(this._name);
    }
  }

  incrementDone(event) {
    if (event.fromState === 'normal' && event.toState === 'scale') {
      if (this.tempValue > 0) {
        this.badgeState = 'normal';
        this._badge = this.tempValue;
      } else {
        this._badge = this.tempValue;
      }
    }
  }
}
