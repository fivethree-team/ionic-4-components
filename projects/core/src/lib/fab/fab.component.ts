import { AnimationParams } from './../gallery/gallery-image/gallery-image.component';
import { FivFeatureDiscovery } from './../feature-discovery/feature-discovery.component';
import { FivLoadingProgressBar } from './../loading-progress-bar/loading-progress-bar.component';
import { FivIcon } from './../icon/icon.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  Renderer2,
  HostBinding,
  OnDestroy,
  ContentChild,
  AfterContentInit,
  TemplateRef,
  Optional
} from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';
import { FivLoadingSpinner } from '../loading-spinner/loading-spinner.component';
import { IonContent, IonLabel } from '@ionic/angular';
import { Subject } from 'rxjs';
import {
  takeUntil,
  tap,
  filter,
  repeat,
  map,
  pairwise,
  distinctUntilChanged
} from 'rxjs/operators';

@Component({
  selector: 'fiv-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: [
    trigger('fabAnim', [
      transition(
        'void => *',
        [
          style({
            transform: '{{fromTransform}}'
          }),
          animate(
            '250ms ease-out',
            style({
              transform: '{{toTransform}}'
            })
          )
        ],
        {
          params: {
            fromTransform: 'scale(0) translateX(-50%)',
            toTransform: 'translateX(-50%) scale(1)'
          }
        }
      ),
      transition(
        '* => void',
        [
          style({
            transform: '{{toTransform}}'
          }),
          animate('250ms ease-in', style({ transform: '{{fromTransform}}' }))
        ],
        {
          params: {
            fromTransform: 'scale(0) translateX(-50%)',
            toTransform: 'translateX(-50%) scale(1)'
          }
        }
      )
    ]),
    trigger('labelAnim', [
      transition('void => *', [
        style({ width: '0', opacity: 0 }),
        animate('140ms', style({ width: '*', opacity: 1 }))
      ]),
      transition('* => void', [
        style({ width: '*', opacity: 1 }),
        animate('120ms', style({ width: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class FivFab implements OnInit, OnDestroy, AfterContentInit {
  @Input() vertical?: 'top' | 'middle' | 'bottom';
  @Input() horizontal?: 'center' | 'start' | 'end';
  @Input() mode?: 'normal' | 'edge' = 'normal';
  @Input() slot: string;
  @Input() icon: string;
  @Input() spinColor = 'primary';
  @Input() color: string;
  @Input() disabled = false;
  @Input() visible = true;
  @Input() pulse = false;
  @Input() set scroll(scroll: boolean) {
    this._scroll = scroll;
    this.$onDestroy.next();
    this.ngOnInit();
  }
  get scroll() {
    return this._scroll;
  }
  _scroll = true;
  @Input() feature: TemplateRef<any>;

  @Output() fivComplete: EventEmitter<FivFab> = new EventEmitter<FivFab>();
  @Output() fivRefresh: EventEmitter<FivFab> = new EventEmitter<FivFab>();
  @Output() fivHidden: EventEmitter<FivFab> = new EventEmitter<FivFab>();
  @Output() fivShow: EventEmitter<FivFab> = new EventEmitter<FivFab>();
  @Output() fivTransition: EventEmitter<FivFab> = new EventEmitter<FivFab>();

  @ViewChild('spinner') spinner: FivLoadingSpinner;
  @ViewChild('feature') featureDiscovery: FivFeatureDiscovery;
  @ViewChild('bar') bar: FivLoadingProgressBar;
  @ContentChild(FivIcon) iconComp: FivIcon;
  @ContentChild(IonLabel) labelComp: IonLabel;

  loading = false;
  extended = false;
  iconState = 'normal';
  currentDeltaY = 0;
  $onDestroy = new Subject();

  params: { fromTransform: string; toTransform: string } = {
    fromTransform: 'translateX(-50%) scale(0)',
    toTransform: 'translateX(-50%) scale(1)'
  };

  get fromTransform() {
    return this.horizontal === 'center'
      ? 'scale(0) translateX(-50%)'
      : 'scale(0)';
  }

  get toTransform() {
    return this.horizontal === 'center'
      ? 'translateX(-50%) scale(1)'
      : 'scale(1)';
  }

  constructor(
    private renderer: Renderer2,
    @Optional() private content: IonContent
  ) {
    this.params = {
      toTransform: this.toTransform,
      fromTransform: this.fromTransform
    };
  }

  ngOnInit() {
    if (!this.content) {
      console.error('Put the FAB inside an ion-content');
      return;
    }

    if (!this.scroll) {
      return;
    }
    this.content.scrollEvents = true;

    const directionChange = this.content.ionScroll.pipe(
      map(ev => ev.detail.deltaY),
      pairwise(),
      map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
      distinctUntilChanged(),
      takeUntil(this.content.ionScrollEnd),
      repeat()
    );

    const up = directionChange.pipe(filter(direction => direction === 'Up'));

    const down = directionChange.pipe(
      filter(direction => direction === 'Down')
    );

    up.pipe(
      tap(() =>
        this.labelComp ? (this.extended = true) : (this.visible = true)
      ),
      takeUntil(this.$onDestroy)
    ).subscribe();

    down
      .pipe(
        tap(() =>
          this.labelComp ? (this.extended = false) : (this.visible = false)
        ),
        takeUntil(this.$onDestroy)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  ngAfterContentInit(): void {
    this.extended = !!this.labelComp;
  }

  load() {
    this.loading = true;
    this.fivRefresh.emit(this);
  }

  unload() {
    if (this.bar) {
      this.bar.unload();
    }
    this.loading = false;
  }

  complete() {
    if (this.loading) {
      if (this.spinner) {
        this.spinner.completeIn(1000);
      } else if (this.bar) {
        this.bar.complete();
      }
    }
  }

  fillAnimationDone() {
    this.fivComplete.emit(this);
    this.unload();
  }

  rotate(progress: number) {
    this.renderer.setStyle(
      this.spinner._elementRef.nativeElement,
      'transform',
      `rotateZ(${(progress / 200) * 360}deg)`
    );
  }

  fabAnimDone(event) {
    if (event.fromState === 'void') {
      this.fivShow.emit(this);
    }

    if (event.toState === 'void') {
      this.fivHidden.emit(this);
    }
  }
}

export interface FabTransitionEvent {
  from: FabState;
  to: FabState;
}

export enum FabState {
  HIDDEN,
  NORMAL,
  EXTENDED
}
