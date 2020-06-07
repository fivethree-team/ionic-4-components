import { Platform, IonIcon } from '@ionic/angular';
import {
  Component,
  OnInit,
  ViewChild,
  AfterContentInit,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import {
  AnimationEvent,
  trigger,
  transition,
  animate,
  style
} from '@angular/animations';
import { FeaturePosition } from '../interfaces';
import { FivIcon } from '../icon/icon.component';

@Component({
  selector: 'fiv-feature-discovery',
  templateUrl: './feature-discovery.component.html',
  styleUrls: ['./feature-discovery.component.scss'],
  animations: [
    trigger('scale', [
      transition('* => visible', [
        style({ transform: 'scale(0)', opacity: '0' }),
        animate(
          '240ms ease-out',
          style({ transform: 'scale(1)', opacity: '1' })
        )
      ]),
      transition('visible => hidden', [
        style({ transform: 'scale(1)', opacity: '1' }),
        animate('215ms ease-in', style({ transform: 'scale(0)', opacity: '0' }))
      ]),
      transition('visible => execute', [
        style({ transform: 'scale(1)', opacity: '1' }),
        animate(
          '215ms 0.15s ease-in',
          style({ transform: 'scale(1.4)', opacity: '0' })
        )
      ])
    ]),
    trigger('contentAnim', [
      transition('void => *', [
        style({ opacity: '0' }),
        animate('100ms 240ms ease-out', style({ opacity: '1' }))
      ])
    ])
  ]
})
export class FivFeatureDiscovery implements OnInit, AfterContentInit {
  top = 0;
  left = 0;
  width = 420;
  height = 420;
  innerDiameter = 0;
  featurePadding = 0;
  contentTop = 0;
  contentLeft = 0;
  contentWidth = 0;
  contentHeight = 0;
  contentOffset = 0;
  bounds: FeaturePosition;
  icon: string;
  classes: string[];
  @ViewChild('circle', { static: true }) circle: ElementRef;
  @ViewChild('rect', { static: true }) rect: ElementRef;
  @ViewChild('pInner', { static: true, read: ElementRef })
  innerPulse: ElementRef;
  @ViewChild('pOuter', { static: true }) outerPulse: ElementRef;

  animationState = 'hidden';
  pulse = 'small';

  @Output() fivClick = new EventEmitter<any>();
  @Output() fivBackdropClick = new EventEmitter<any>();
  @Output() fivClose = new EventEmitter<any>();
  @Output() fivOpen = new EventEmitter<any>();
  @Output() fivAnimation = new EventEmitter<AnimationEvent>();

  @HostBinding('class') get _classes() {
    return this.classes.join(' ');
  }

  constructor(private renderer: Renderer2, private platform: Platform) {}

  ngOnInit() {}

  ngAfterContentInit(): void {}

  setBounds(bounds: FeaturePosition) {
    this.bounds = bounds;
    this.innerDiameter =
      bounds.height > bounds.width ? bounds.height : bounds.width;
    this.top = bounds.top + bounds.height / 2 - this.height / 2;
    this.left = bounds.left + bounds.width / 2 - this.width / 2;
    this.calculateContentBounds();
    if (!this.icon) {
      const gradient = `-webkit-radial-gradient(transparent ${this
        .innerDiameter /
        2 +
        5}px, var(--fiv-color-feature) ${this.innerDiameter / 2 + 5}px)`;
      const pulseGradient = `-webkit-radial-gradient(transparent ${this
        .innerDiameter /
        2 +
        5}px, var(--fiv-color-pulse) ${this.innerDiameter / 2 + 5}px)`;
      this.renderer.setStyle(this.circle.nativeElement, 'background', gradient);
      this.renderer.setStyle(
        this.innerPulse.nativeElement,
        'background',
        pulseGradient
      );
      this.renderer.setStyle(
        this.outerPulse.nativeElement,
        'background',
        pulseGradient
      );
    }
  }
  calculateContentBounds() {
    const absoluteCenter: { x: number; y: number } = {
      x: this.platform.width() / 2,
      y: this.platform.height() / 2
    };
    const center: { x: number; y: number } = {
      x: this.left + this.width / 2,
      y: this.top + this.width / 2
    };
    const rectWidth = Math.sqrt(Math.pow(this.width, 2) / 2);
    const isTop = center.y < absoluteCenter.y;
    const isLeft = center.x < absoluteCenter.x;
    const innerRadius = this.innerDiameter / 2;
    const padding = this.featurePadding / 2;
    let contentRight = 0;
    let contentBottom = 0;
    if (isLeft) {
      this.contentLeft = center.x - innerRadius;
      contentRight = Math.min(
        center.x + rectWidth / 2 + this.contentOffset,
        this.platform.width()
      );
    } else {
      this.contentLeft = Math.max(
        center.x - rectWidth / 2 - this.contentOffset,
        0
      );
      contentRight = center.x + innerRadius;
    }
    if (isTop) {
      this.contentTop = center.y + innerRadius + padding;
      contentBottom = center.y + rectWidth / 2 + -1 * this.contentOffset;
    } else {
      this.contentTop = center.y - rectWidth / 2 + this.contentOffset;
      contentBottom = center.y - innerRadius - padding;
    }

    this.contentWidth = Math.abs(this.contentLeft - contentRight);
    this.contentHeight = Math.abs(this.contentTop - contentBottom);
  }
  handleCircleAnimation(event: AnimationEvent) {
    this.fivAnimation.emit(event);
    if (event.toState === 'visible') {
      this.fivOpen.emit();
    }
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.fivClose.emit();
    }
    if (event.fromState === 'visible' && event.toState === 'execute') {
      this.fivClose.emit();
    }
  }

  show() {
    this.animationState = 'visible';
  }

  hide() {
    this.animationState = 'hidden';
  }

  featureClick() {
    this.animationState = 'execute';
  }

  setIcon(icon: FivIcon | IonIcon) {
    if (icon) {
      this.icon = icon.name;
    }
  }
}
