import { Component, OnInit, ViewChild, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { FivLoadingProgressBar } from '../loading-progress-bar/loading-progress-bar.component';

@Component({
  selector: 'fiv-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class FivLoadingButton implements OnInit {

  loading = false;

  @ViewChild('progress') progress: FivLoadingProgressBar;
  @Input() color = 'light';
  @Input() expand = 'block';
  @Input() fill = 'solid';
  @Input() size = 'default';
  @Input() shape;

  @HostBinding('class.button-disabled')
  @Input()
  disabled = false;

  @Input() verticalAlign: 'top' | 'bottom' = 'top';

  @Input() type: 'submit' | 'reset' | 'button' = 'button';

  @Output() fivRefresh: EventEmitter<FivLoadingButton> = new EventEmitter();
  @Output() fivComplete: EventEmitter<FivLoadingButton> = new EventEmitter();
  @Output() fivButtonClick: EventEmitter<FivLoadingButton> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleSpinner() {
    this.loading = !this.loading;
    this.progress.toggleSpinner();
    this.fivRefresh.emit(this);
  }

  load() {
    this.loading = true;
    this.progress.load();
  }

  unload() {
    this.loading = false;
    this.progress.unload();
  }

  complete() {
    if (this.loading) {
      this.progress.complete({});
    }
  }

  onComplete(isComplete: boolean) {

    this.loading = false;
    this.fivComplete.emit(this);
  }

  onClick() {
    this.fivButtonClick.emit(this);
  }

}
