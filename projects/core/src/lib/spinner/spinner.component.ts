import { DomSanitizer } from '@angular/platform-browser';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import {
  Component,
  OnInit,
  Input,
  Optional,
  Inject,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  ViewChild,
  HostBinding,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer, interval } from 'rxjs';
const BASE_SIZE = 100;

@Component({
  selector: 'fiv-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[style.width.px]': 'diameter',
    '[style.height.px]': 'diameter'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FivSpinner implements OnInit {
  private static diameters = new Set<number>([BASE_SIZE]);
  private static styleTag: HTMLStyleElement | null = null;
  private _diameter = BASE_SIZE;
  _strokeWidth = 10;
  _value = 0;

  @Output() fivProgress = new EventEmitter<number>();
  @Output() fivComplete = new EventEmitter<FivSpinner>();
  @ViewChild('determinateCircle', { static: false })
  determinateCircle: ElementRef;
  @Input() mode: 'indeterminate' | 'determinate' = 'indeterminate';
  @Input() circleRadius = 45;
  _color = 'var(--fiv-spin-color)';

  @HostBinding('class') get class() {
    return (
      this.mode +
      ' fiv-spinner fiv-progress-spinner fiv-progress-spinner-indeterminate-animation'
    );
  }

  constructor(
    @Optional() @Inject(DOCUMENT) private _document: any,
    public _elementRef: ElementRef,
    public change: ChangeDetectorRef,
    private builder: AnimationBuilder,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  get viewBox() {
    const viewBox = this.circleRadius * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }

  /** The stroke circumference of the svg circle. */
  get strokeCircumference(): number {
    return 2 * Math.PI * this.circleRadius;
  }

  /** The dash offset of the svg circle. */
  get strokeDashOffset() {
    if (this.mode === 'determinate') {
      return (this.strokeCircumference * (100 - this._value)) / 100;
    }

    return null;
  }

  /** Stroke width of the circle in percent. */
  get circleStrokeWidth() {
    return (this.strokeWidth / this.diameter) * 100;
  }

  /** Value of the progress circle. */
  @Input()
  get value(): number {
    return this.mode === 'determinate' ? this._value : 0;
  }
  set value(newValue: number) {
    this._value = Math.max(0, Math.min(100, newValue));
  }

  @Input()
  get diameter(): number {
    return this._diameter;
  }
  set diameter(size: number) {
    this._diameter = size;

    if (!FivSpinner.diameters.has(this._diameter)) {
      this._attachStyleNode();
    }
  }

  /** Stroke width of the progress spinner. */
  @Input()
  get strokeWidth(): number {
    return this._strokeWidth || this.diameter / 10;
  }
  set strokeWidth(value: number) {
    this._strokeWidth = value;
  }

  /** Dynamically generates a style tag containing the correct animation for this diameter. */
  private _attachStyleNode(): void {
    let styleTag = FivSpinner.styleTag;

    if (!styleTag) {
      styleTag = this._document.createElement('style');
      this._document.head.appendChild(styleTag);
      FivSpinner.styleTag = styleTag;
    }

    if (styleTag && styleTag.sheet) {
      (styleTag.sheet as CSSStyleSheet).insertRule(this._getAnimationText(), 0);
    }

    FivSpinner.diameters.add(this.diameter);
  }

  /** Generates animation styles adjusted for the spinner's diameter. */
  private _getAnimationText(): string {
    const INDETERMINATE_ANIMATION_TEMPLATE = `
    @keyframes fiv-progress-spinner-stroke-rotate-DIAMETER {
       0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
       12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
       12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
       25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }
       25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
       37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
       37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
       50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }
       50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
       62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
       62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
       75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }
       75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
       87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
       87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
       100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
     }
   `;
    return (
      INDETERMINATE_ANIMATION_TEMPLATE
        // Animation should begin at 5% and end at 80%
        .replace(/START_VALUE/g, `${0.95 * this.strokeCircumference}`)
        .replace(/END_VALUE/g, `${0.2 * this.strokeCircumference}`)
        .replace(/DIAMETER/g, `${this.diameter}`)
    );
  }

  completeIn(duration: number) {
    this.mode = 'determinate';
    this.change.detectChanges();

    const animation = this.builder.build([
      style({
        'stroke-dasharray': 180,
        'stroke-dashoffset': 90,
        transformOrigin: 'center',
        stroke: 'var(--fiv-spin-color)'
      }),
      animate(
        `${duration}ms ease-out`,
        style({
          'stroke-dasharray': 315,
          'stroke-dashoffset': 0,
          transformOrigin: 'center',
          stroke: 'var(--fiv-spin-color)',
          opacity: 0
        })
      )
    ]);

    const player = animation.create(this.determinateCircle.nativeElement);
    player.play();
    player.onDone(() => {
      this.fivComplete.emit(this);
      this._value = 0;
    });

    const i = interval(duration / 100);
    const t = timer(duration + duration / 50);
    const progress = i.pipe(takeUntil(t));

    progress.subscribe(p => {
      this.fivProgress.emit(p);
    });
  }
  setValue(progress: number): any {
    this.mode = 'determinate';
    this._value = progress;
    this.change.detectChanges();
  }

  spin() {
    this.mode = 'indeterminate';
    this.change.detectChanges();
  }

  stop() {
    this._value = 0;
    this.change.detectChanges();
  }

  setMode(mode) {
    this.mode = mode;
    this.change.detectChanges();
  }
}
