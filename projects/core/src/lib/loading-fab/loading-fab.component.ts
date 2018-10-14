import { Component, OnInit, Input, HostBinding, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'fiv-loading-fab',
  templateUrl: './loading-fab.component.html',
  styleUrls: ['./loading-fab.component.scss'],
  animations: [trigger('fabAnim', [
    transition('void => *', [
      style({ transform: 'scale(0)' }),
      animate('250ms ease-out')
    ]),
    transition('* => void', [
      animate('250ms ease-in', style({ transform: 'scale(0)' }))
    ])
  ]),
  trigger('spinnerAnim', [
    transition('void => *', [
      style({ opacity: '0' }),
      animate('250ms ease-out')
    ]),
    transition('* => void', [
      animate('250ms ease-in', style({ opacity: '0' }))
    ])
  ]),
  trigger('rotateAnim', [
    transition('normal => rotate', [
      animate('125ms ease-out')
    ]),
    transition('rotate => normal', [
      animate('125ms ease-in')
    ]),
    state('rotate', style({ opacity: '0', transform: 'rotateZ(45deg)' })),
    state('normal', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
  ]),
  trigger('fillAnim', [
    transition('* => fill', [
      style({
        'stroke-dasharray': 180,
        'stroke-dashoffset': 90,
        'transformOrigin': 'center',
        'stroke': '#DE3E35'
      }),
      animate('1400ms ease-out')
    ]),
    state('fill', style({
      'stroke-dasharray': 315,
      'stroke-dashoffset': 0,
      'transformOrigin': 'center',
      'stroke': '#1B9A59',
      'opacity': 0
    })
    )]
  )]
})
export class LoadingFabComponent implements OnInit {

  @Input() vertical?: 'top' | 'center' | 'bottom';
  @Input() horizontal?: 'center' | 'start' | 'end';
  @Input() edge: boolean;
  @Input() slot: string;
  @Input() icon: string;
  @Input() spinColor: string;
  @Input() fabColor: string;
  @Input() iconColor = '#000';
  @Input() checkmark = false;
  @Input() disabled = false;

  @Output() fivComplete: EventEmitter<LoadingFabComponent> = new EventEmitter<LoadingFabComponent>();
  @Output() fivRefresh: EventEmitter<LoadingFabComponent> = new EventEmitter<LoadingFabComponent>();

  @ViewChild('spinner') spinner: LoadingSpinnerComponent;

  loading = false;
  iconState = 'normal';

  @HostBinding('class') get classes(): string {
    const verticalClass = !!this.vertical ? `fab-vertical-${this.vertical}` : '';
    const horizontalClass = !!this.horizontal ? `fab-horizontal-${this.horizontal}` : '';
    const edgeClass = this.edge ? `fab-edge-` : '';

    return `${verticalClass} ${horizontalClass} ${edgeClass}`;
  }

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  toggleSpinner() {
    if (this.icon !== 'md-checkmark') {
      this.loading = !this.loading;
    }
  }

  load() {
    this.loading = true;
    this.fivRefresh.emit(this);
  }

  unload() {
    this.loading = false;
  }

  complete() {
    if (this.loading) {
      this.spinner.completeIn(500);
    }
  }

  fillAnimationDone() {
    if (this.checkmark) {
      console.log('fill animation done', event);
      this.iconState = 'rotate';
    } else {
      this.postComplete();
    }
  }

  changeIconAndReveal(event, icon: string) {
    console.log(event, icon);
    if (event.fromState === 'normal') {
      this.icon = icon;
      this.iconState = 'normal';
    } else {
      if (event.fromState === 'rotate') {
        this.postComplete();
      }

    }
  }

  postComplete() {
    this.unload();
    this.fivComplete.emit(this);
  }

  rotate(progress: number) {
    this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'transform', `rotateZ(${progress / 200 * 360}deg)`);
  }

}
