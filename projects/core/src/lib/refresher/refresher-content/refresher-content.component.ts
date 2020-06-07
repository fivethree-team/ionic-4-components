import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';
import { animate, style, AnimationBuilder } from '@angular/animations';
import { FivSpinner } from '../../spinner/spinner.component';

@Component({
  selector: 'fiv-refresher-content',
  templateUrl: './refresher-content.component.html',
  styleUrls: ['./refresher-content.component.scss']
})
export class FivRefresherContent implements OnInit {
  _progress = 0;
  @Input() set progress(progress) {
    this._progress = progress;
    if (progress < 1) {
      this.renderer.setStyle(
        this.spinnerRef.nativeElement,
        'transform',
        `rotateZ(${360 * progress}deg)`
      );
    }
  }

  get progress() {
    return this._progress;
  }

  @Output() fivComplete: EventEmitter<FivRefresherContent> = new EventEmitter<
    FivRefresherContent
  >();
  @Output() fivRefresh: EventEmitter<FivRefresherContent> = new EventEmitter<
    FivRefresherContent
  >();
  @Output() fivHidden: EventEmitter<FivRefresherContent> = new EventEmitter<
    FivRefresherContent
  >();
  @Output() fivShowed: EventEmitter<FivRefresherContent> = new EventEmitter<
    FivRefresherContent
  >();
  @Output() fivProgress: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('spinner', { static: false }) spinner: FivSpinner;
  @ViewChild('spinner', { static: true, read: ElementRef })
  spinnerRef: ElementRef;
  @ViewChild('background', { static: false }) background: ElementRef;

  visible = false;

  constructor(
    public element: ElementRef,
    private renderer: Renderer2,
    public builder: AnimationBuilder
  ) {}

  ngOnInit() {}

  load() {
    this.visible = true;
    this.spinner.spin();
    this.fivRefresh.emit(this);
  }

  unload() {
    this.spinner.stop();
  }

  show() {
    if (!this.visible) {
      this.visible = true;
      const animation = this.builder.build([
        style({ transform: 'scale(0)' }),
        animate('0ms ease-out', style({ transform: 'scale(1)' }))
      ]);

      const player = animation.create(this.background.nativeElement);
      player.play();
      player.onDone(() => {
        this.fivShowed.emit(this);
        player.destroy();
      });
    }
  }

  hide() {
    if (this.visible) {
      const transform = `scale(1)`;
      const animation = this.builder.build([
        style({ transform: transform }),
        animate('175ms ease-in', style({ transform: `scale(0)` }))
      ]);

      const player = animation.create(this.background.nativeElement);
      player.play();
      player.onDone(() => {
        this.fivHidden.emit(this);
        this.visible = false;
        player.destroy();
      });
    }
  }

  complete() {
    this.unload();
    this.fivComplete.emit(this);
  }

  setValue(progress: number) {
    this.spinner.setValue(progress);
  }

  reset() {
    this.spinner.setMode('indeterminate');
  }
}
