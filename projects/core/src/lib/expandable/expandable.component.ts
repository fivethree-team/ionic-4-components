
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'fiv-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  animations: [
    trigger('listAnim', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0', opacity: 0 })),
      transition('closed => open', [
        animate('275ms ease-out', keyframes([
          style({ height: '0', opacity: 0, offset: 0 }),
          style({ height: '*', opacity: 0.1, offset: 0.8 }),
          style({ height: '*', opacity: 1, offset: 1 }),
        ]))
      ]),
      transition('open => closed', [
        animate('220ms ease-out', keyframes([
          style({ height: '*', opacity: 1, offset: 0 }),
          style({ height: '*', opacity: 0.1, offset: 0.2 }),
          style({ height: '0', opacity: 0, offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class ExpandableComponent implements OnInit {

  @Input() isOpen = false;
  @Output() fivWillOpen: EventEmitter<ExpandableComponent> = new EventEmitter();
  @Output() fivDidOpen: EventEmitter<ExpandableComponent> = new EventEmitter();
  @Output() fivWillClose: EventEmitter<ExpandableComponent> = new EventEmitter();
  @Output() fivDidClose: EventEmitter<{ expandable: ExpandableComponent, param: any }> = new EventEmitter();

  param: any;


  constructor(private change: ChangeDetectorRef) { }

  ngOnInit() {
  }

  open() {
    this.fivWillOpen.emit(this);
    this.isOpen = true;
    this.change.detectChanges();
  }

  toggle() {
    if (this.isOpen === false) {
      this.open();
    } else {
      this.close();
    }
  }

  close(param?: any) {
    this.param = param;
    this.fivWillClose.emit(this);
    console.log('close');
    this.isOpen = false;
    this.change.detectChanges();
  }

  onAnimationEnd(event) {
    if (event.fromState === 'closed') {
      this.fivDidOpen.emit(this);
    } else if (event.fromState === 'open') {
      this.fivDidClose.emit({ expandable: this, param: this.param });
      this.param = null;
    }
  }

}
