import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';

@Component({
  selector: 'fiv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rotateAnim', [
      transition('normal => rotate', [
        animate('125ms ease-out')
      ]),
      transition('rotate => normal', [
        animate('125ms ease-in')
      ]),
      state('rotate', style({ opacity: '0', transform: 'scale(0) rotateZ(45deg)' })),
      state('normal', style({ opacity: '1', transform: 'scale(1) rotateZ(0deg)' }))
    ]),
    trigger('scaleAnim', [
      transition('void => normal', [
        style({ opacity: '0', transform: 'scale(0)' }),
        animate('125ms ease-out', style({ opacity: '1', transform: 'scale(1)' }))
      ]),
      transition('normal => scale', [
        animate('125ms ease-out')
      ]),
      transition('scale => normal', [
        animate('125ms ease-in')
      ]),
      state('scale', style({ opacity: '0', transform: 'scale(0)' })),
      state('normal', style({ opacity: '1', transform: 'scale(1)' }))
    ])
  ]
})
export class FivIcon implements OnInit {

  _name: string;
  _indicatorValue = 0;
  tempValue: number;
  state: 'normal' | 'rotate' = 'normal';
  temp: string;
  @Input() color: string;

  @Input() slot: string;
  @Input() smallIcon: string;
  @Input() off = false;
  @Output() transitionDone = new EventEmitter<string>();


  indicatorState: 'normal' | 'scale' = 'scale';
  indicatorValueState: 'normal' | 'scale' = 'scale';

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
  get indicatorValue(): number {
    return this._indicatorValue;
  }
  set indicatorValue(value: number) {
    this.transformIndicator(value);
  }

  @Input()
  set dotVisible(dotVisible: boolean) {
    this._dotVisible = dotVisible;
    if (dotVisible) {
      this.indicatorState = 'normal';
    }
  }

  get dotVisible(): boolean {
    return this._dotVisible;
  }

  _dotVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  transform(name: string) {
    this.temp = name;
    this.state = 'rotate';
  }

  transformIndicator(value: number) {
    if (this.dotVisible) {
      this._indicatorValue = value;
      return;
    }
    if (value === 0) {
      this._indicatorValue = value;
      this.indicatorState = 'normal';
      this.indicatorValueState = 'scale';
    } else {
      this.indicatorState = 'scale';
      if (this.indicatorValueState === 'scale') {
        this.indicatorValueState = 'normal';
        this._indicatorValue = value;
      } else {
        this.tempValue = value;
        this.indicatorValueState = 'scale';
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
        this.indicatorValueState = 'normal';
        this._indicatorValue = this.tempValue;
      } else {
        this._indicatorValue = this.tempValue;
      }
    }

  }
}
