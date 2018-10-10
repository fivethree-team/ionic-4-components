import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { LoadingService } from '../loading/loading.service';

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
    trigger('fillAnim', [
      transition('void => *', [
        style({ left: '-5%', width: '5%' }),
        animate('850ms ease-out', style({ left: '0%', width: '100%' }))
      ]),
    ])
  ]
})
export class LoadingProgressBarComponent implements OnInit, OnDestroy {

  loading = false;
  @Input() global = false;
  @Input() isComplete = false;
  @Input() verticalAlign: 'top' | 'bottom' = 'top';
  @Output() fivComplete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() fivRefresh: EventEmitter<LoadingProgressBarComponent> = new EventEmitter<LoadingProgressBarComponent>();

  @ViewChild('bar') bar: ElementRef;

  constructor(public loadingService: LoadingService) {
  }

  ngOnInit() {
    if (this.global) {
      this.loadingService.completeChange.subscribe(isComplete => {
        if (isComplete) {
          this.complete();
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

  complete() {
    console.log('set complete');
    this.isComplete = true;
    console.log(this.isComplete);
  }

  fillAnimationComplete(isComplete: boolean) {
    if (isComplete) {
      console.log('fill animation complete', isComplete);
      this.fivComplete.emit(isComplete);
      this.isComplete = false;
      if (this.global) {
        this.loadingService.unload();
      } else {
        this.unload();
      }
    }
  }

}
