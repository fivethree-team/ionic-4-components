import { FivStepHeaderComponent } from './../fiv-step-header/fiv-step-header.component';
import { Component, OnInit, AfterContentInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { ItemExpandableComponent } from '../../item-expandable/item-expandable.component';

@Component({
  selector: 'fiv-step-content',
  templateUrl: './fiv-step-content.component.html',
  styleUrls: ['./fiv-step-content.component.scss']
})
export class FivStepContentComponent implements OnInit, AfterContentInit {

  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Output() onDidOpen: EventEmitter<FivStepContentComponent> = new EventEmitter();
  @Output() onDidClose: EventEmitter<FivStepContentComponent> = new EventEmitter();

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
