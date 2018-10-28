import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { StepHeaderComponent } from '../step-header/step-header.component';
import { ExpandableComponent } from '../expandable/expandable.component';

@Component({
  selector: 'fiv-step-content',
  templateUrl: './step-content.component.html',
  styleUrls: ['./step-content.component.scss']
})
export class StepContentComponent implements OnInit {

  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Output() fivDidOpen: EventEmitter<StepContentComponent> = new EventEmitter();
  @Output() fivDidClose: EventEmitter<StepContentComponent> = new EventEmitter();
  @Output() fivClick: EventEmitter<StepContentComponent> = new EventEmitter();

  @ViewChild('self') step: ExpandableComponent;
  @ViewChild('header') header: StepHeaderComponent;

  constructor(private change: ChangeDetectorRef) {
  }

  ngOnInit() { }

  open() {
    this.isOpen = true;
    this.change.detectChanges();
  }

  close() {
    this.isOpen = false;
    this.change.detectChanges();

  }

  complete() {
    this.header.complete();
  }

  reset() {
    this.header.reset();
  }

  afterClose() {
    this.fivDidClose.emit(this);
  }

  afterOpen() {
    this.fivDidOpen.emit(this);
  }

  click() {
    this.fivClick.emit(this);
  }

}
