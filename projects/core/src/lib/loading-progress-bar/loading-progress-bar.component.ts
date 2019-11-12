import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationBuilder,
  AnimationPlayer
} from '@angular/animations';
import { timer } from 'rxjs';
import { FivLoadingService } from './loading.service';

@Component({
  selector: 'fiv-loading-progress-bar',
  templateUrl: './loading-progress-bar.component.html',
  styleUrls: ['./loading-progress-bar.component.scss'],
  animations: [
    trigger('progressAnim', [
      transition('void => *', [
        style({ height: '0px' }),
        animate('250ms ease-out')
      ]),
      transition('* => void', [
        animate('299ms ease-in', style({ height: '0px' }))
      ])
    ]),
    trigger('progressAnimLinear', [
      transition('void => *', [
        style({ height: '0px' }),
        animate('65ms ease-out')
      ]),
      transition('* => void', [
        animate('299ms ease-in', style({ height: '0px' }))
      ])
    ]),
    trigger('fillAnim', [
      transition('void => *', [
        style({
          width: '0px'
        }),
        animate('850ms ease-out', style({ width: '100%' }))
      ])
    ])
  ]
})
export class FivLoadingProgressBar implements OnInit, OnDestroy {
  @Input() loading = false;
  @Input() global = false;
  @Input() isComplete = false;
  progress = 0;
  @Input() verticalAlign: 'top' | 'bottom' = 'top';
  @Output() fivComplete: EventEmitter<any> = new EventEmitter<any>();
  @Output() fivDoneShrinking: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() fivRefresh: EventEmitter<FivLoadingProgressBar> = new EventEmitter<
    FivLoadingProgressBar
  >();

  @ViewChild('bar', { static: false }) bar: ElementRef;
  @ViewChild('linear', { static: false }) linear: ElementRef;

  param: any;

  _progressPlayer: AnimationPlayer;
  private animating = false;

  constructor(
    public loadingService: FivLoadingService,
    private builder: AnimationBuilder
  ) {}

  ngOnInit() {
    if (this.global) {
      this.loadingService.completeChange.subscribe(isComplete => {
        if (isComplete) {
          this.complete(null);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.global) {
      this.loadingService.completeChange.unsubscribe();
    }
  }

  toggleSpinner() {
    this.loading = !this.loading;
  }

  load() {
    this.loading = true;
    this.fivRefresh.emit(this);
  }

  unload() {
    this.loading = false;
    if (this.isComplete) {
      this.isComplete = false;
    }
  }

  complete(param?: any) {
    this.param = param;
    this.isComplete = true;
    this.fillIn(850);
  }

  fillAnimationComplete(isComplete: boolean) {
    if (isComplete) {
      this.fivComplete.emit(this.param);
      this.isComplete = false;
      this.param = null;
      if (this.global) {
        this.loadingService.unload();
      } else {
        this.unload();
      }
    }
  }

  setProgress(progress) {
    if (progress < 0) {
      this.progress = 0;
      return;
    }
    if (progress > 100) {
      this.progress = 100;
      return;
    }
    this.progress = progress;
  }

  fillIn(ms: number) {
    // first define a reusable animation
    this.progress = 0;
    const myAnimation = this.builder.build([
      style({ width: `${this.progress}%` }),
      animate(ms, style({ width: '100%' }))
    ]);

    // use the returned factory object to create a player
    const player = myAnimation.create(this.linear.nativeElement);

    const t = timer(0, ms / 100).subscribe(() => {
      if (this.progress <= 0) {
        return t.unsubscribe();
      }
      this.progress++;
    });

    player.play();
    player.onDone(() => {
      if (this.animating) {
        this.fillAnimationComplete(true);
        this.stopProgressAnimation();
      }
    });
    this.stopProgressAnimation();
    this.animating = true;

    this._progressPlayer = player;
  }

  shrinkIn(ms: number) {
    // first define a reusable animation
    this.progress = 100;
    const myAnimation = this.builder.build([
      style({ width: `${this.progress}%` }),
      animate(ms, style({ width: 0 }))
    ]);

    // use the returned factory object to create a player
    const player = myAnimation.create(this.linear.nativeElement);

    const t = timer(0, ms / 100).subscribe(() => {
      if (this.progress <= 0) {
        return t.unsubscribe();
      }
      this.progress--;
    });

    player.play();
    player.onDone(() => {
      if (this.animating) {
        this.fivDoneShrinking.emit(true);
        this.stopProgressAnimation();
      }
    });
    this.stopProgressAnimation();
    this.animating = true;

    this._progressPlayer = player;
  }

  stopProgressAnimation() {
    if (this._progressPlayer) {
      this._progressPlayer.destroy();
      this._progressPlayer = null;
      this.animating = false;
    }
  }
}
