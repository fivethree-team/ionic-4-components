import { Platform } from '@ionic/angular';
import {
  Component, OnInit, ViewChild, AfterContentInit,
  ElementRef, Renderer2, Output, EventEmitter, HostListener
} from '@angular/core';
import { AnimationEvent, trigger, transition, animate, style, keyframes, animation } from '@angular/animations';
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
        animate('240ms ease-out', style({ transform: 'scale(1)', opacity: '1' }))
      ]),
      transition('visible => hidden', [
        style({ transform: 'scale(1)', opacity: '1' }),
        animate('215ms ease-in', style({ transform: 'scale(0)', opacity: '0' }))
      ]),
      transition('visible => execute', [
        style({ transform: 'scale(1)', opacity: '1' }),
        animate('215ms 0.15s ease-in', style({ transform: 'scale(1.4)', opacity: '0' }))
      ]),
    ]),
    trigger('pulse', [
      transition('small => big', [
        style({ transform: 'scale(1) translate(-50%,-50%)' }),
        animate('1000ms', style({ transform: 'scale(1.1) translate(-45%,-45%)' }))
      ]),
      transition('big => small', [
        style({ transform: 'scale(1.1) translate(-45%,-45%)' }),
        animate('400ms', style({ transform: 'scale(1) translate(-50%,-50%)' }))
      ]),
    ]),
    trigger('pulseFade', [
      transition('small => big', [
        style({ transform: 'scale(1) translate(-50%,-50%)', opacity: 0.8 }),
        animate('1000ms', style({ transform: 'scale(1.6) translate(-28%,-28%)', opacity: 0 }))
      ]),
      transition('big => small', [
        style({ transform: 'scale(1) translate(-50%,-50%)', opacity: 0 }),
        animate('400ms', style({ transform: 'scale(1) translate(-50%,-50%)', opacity: 0 }))
      ]),
    ])
  ]
})
export class FivFeatureDiscovery implements OnInit, AfterContentInit {
  top = '0px';
  left = '0px';
  width = 420;
  height = 420;
  innerDiameter = 80;
  bounds: FeaturePosition;
  icon: string;
  @ViewChild('circle') circle: ElementRef;
  @ViewChild('pInner', { read: ElementRef }) innerPulse: ElementRef;
  @ViewChild('pOuter') outerPulse: ElementRef;

  animationState = 'hidden';
  pulse = 'small';

  @Output() fivClick = new EventEmitter<any>();
  @Output() fivBackdropClick = new EventEmitter<any>();
  @Output() fivClose = new EventEmitter<any>();
  @Output() fivOpen = new EventEmitter<any>();

  constructor(
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() { }

  ngAfterContentInit(): void {
  }


  setBounds(bounds: FeaturePosition) {
    console.log('bounds for overlay', bounds);
    this.bounds = bounds;
    this.innerDiameter = bounds.height > bounds.width ? bounds.height : bounds.width;
    console.log('inner diameter', this.innerDiameter);
    this.top = bounds.top + bounds.height / 2 - this.height / 2 + 'px';
    this.left = bounds.left + bounds.width / 2 - this.width / 2 + 'px';
    if (!this.icon) {
      // tslint:disable-next-line:max-line-length
      const gradient = `-webkit-radial-gradient(transparent ${this.innerDiameter / 2 + 5}px, var(--fiv-color-feature) ${this.innerDiameter / 2 + 5}px)`;
      // tslint:disable-next-line:max-line-length
      const pulseGradient = `-webkit-radial-gradient(transparent ${this.innerDiameter / 2 + 5}px, var(--fiv-color-pulse) ${this.innerDiameter / 2 + 5}px)`;
      this.renderer.setStyle(this.circle.nativeElement, 'background', gradient);
      this.renderer.setStyle(this.innerPulse.nativeElement, 'background', pulseGradient);
      this.renderer.setStyle(this.outerPulse.nativeElement, 'background', pulseGradient);
    }

  }

  handleCircleAnimation(event: AnimationEvent) {
    console.log('handle animation', event);
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
  handleFeatureAnimation(event: AnimationEvent) {
    if (event.toState === 'big') {
      this.pulse = 'small';
    }
    if (event.toState === 'small') {
      this.pulse = 'big';
    }

  }

  show() {
    console.log('wh', this.width, this.height);
    this.animationState = 'visible';
  }

  hide() {
    this.animationState = 'hidden';
  }

  featureClick() {
    this.animationState = 'execute';
  }

  setIcon(icon: FivIcon) {
    if (icon) {
      this.icon = icon.name;
    }
  }

}
