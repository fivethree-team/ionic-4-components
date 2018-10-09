import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listAnimation } from '../animations/animations';

@Component({
  selector: 'fiv-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  animations: [listAnimation]
})
export class ExpandableComponent implements OnInit {

  public isOpen = false;
  state = 'closed';
  @Output() willOpen: EventEmitter<ExpandableComponent> = new EventEmitter();
  @Output() didOpen: EventEmitter<ExpandableComponent> = new EventEmitter();
  @Output() willClose: EventEmitter<ExpandableComponent> = new EventEmitter();
  @Output() didClose: EventEmitter<ExpandableComponent> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  open() {
    this.willOpen.emit(this);
    this.isOpen = true;
    this.state = 'open';
  }

  toggle() {
    if (this.isOpen === false) {
      this.open();
    } else {
      this.close();
    }
  }

  close() {
    this.willClose.emit(this);
    console.log('close');
    this.isOpen = false;
    this.state = 'closed';
  }

  onAnimationEnd(event) {
    if (event.fromState === 'closed') {
      this.didOpen.emit(this);
    } else if (event.fromState === 'open') {
      this.didClose.emit(this);
    }
  }

}
