import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
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

  @ViewChild('self') step: ExpandableComponent;
  @ViewChild('header') header: StepHeaderComponent;

  constructor() {
  }

  ngOnInit() { }

  open() {
    this.step.open();
  }

  close() {
    this.step.close();
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

}
