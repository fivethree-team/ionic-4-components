import { FivStepHeaderComponent } from './../fiv-step-header/fiv-step-header.component';
import { Component, OnInit, AfterContentInit, Host, Self, ElementRef, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { ItemExpandableComponent } from '../../item-expandable/item-expandable.component';

@Component({
  selector: 'fiv-step',
  templateUrl: './fiv-step.component.html',
  styleUrls: ['./fiv-step.component.scss']
})
export class FivStepComponent implements OnInit, AfterContentInit {

  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Output() onDidOpen: EventEmitter<FivStepComponent> = new EventEmitter();
  @Output() onDidClose: EventEmitter<FivStepComponent> = new EventEmitter();

  @ViewChild('self') step: ItemExpandableComponent;
  @ViewChild('header') header: FivStepHeaderComponent;


  constructor() {
  }

  ngOnInit() { }

  ngAfterContentInit(): void {


  }

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
    this.onDidClose.emit(this);
  }

  afterOpen() {
    this.onDidOpen.emit(this);
  }


}
