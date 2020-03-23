import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { FivStepHeader } from '../step-header/step-header.component';
import { FivExpandable } from '../../expandable/expandable.component';

@Component({
  selector: 'fiv-step-content',
  templateUrl: './step-content.component.html',
  styleUrls: ['./step-content.component.scss']
})
export class FivStepContent implements OnInit {
  @Input() index: number;
  @Input() icon: string;
  @Input() isLast = false;
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Output() fivDidOpen: EventEmitter<FivStepContent> = new EventEmitter();
  @Output() fivDidClose: EventEmitter<FivStepContent> = new EventEmitter();
  @Output() fivClick: EventEmitter<FivStepContent> = new EventEmitter();

  @ViewChild('self', { static: false }) step: FivExpandable;
  @ViewChild('header', { static: false }) header: FivStepHeader;

  constructor(private change: ChangeDetectorRef) {}

  ngOnInit() {}

  open() {
    this.isOpen = true;
    this.change.detectChanges();
  }

  close() {
    this.isOpen = false;
    this.change.detectChanges();
  }

  completeAndClose() {
    this.close();
    this.complete();
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
