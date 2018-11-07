import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { LoadingProgressBarComponent } from '../loading-progress-bar/loading-progress-bar.component';

@Component({
  selector: 'fiv-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements OnInit {

  loading = false;

  @ViewChild('progress') progress: LoadingProgressBarComponent;
  @Input() color = 'light';
  @Input() expand = 'block';
  @Input() disabled = false;
  @Input() verticalAlign: 'top' | 'bottom' = 'top';
  @Output() fivRefresh: EventEmitter<LoadingButtonComponent> = new EventEmitter();
  @Output() fivRefreshComplete: EventEmitter<LoadingButtonComponent> = new EventEmitter();
  @Output() fivButtonClick: EventEmitter<LoadingButtonComponent> = new EventEmitter();

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
    console.log('on complete', isComplete);
    this.loading = false;
    this.fivRefreshComplete.emit(this);
  }

  onClick() {
    this.fivButtonClick.emit(this);
  }

}
