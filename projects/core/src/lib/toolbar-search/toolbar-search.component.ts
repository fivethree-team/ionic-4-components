import { Component, OnInit, Input, EventEmitter, Output, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'fiv-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss'],
  animations: [
    trigger('searchbarAnim', [
      transition('small => normal', [
        animate('125ms ease-out')
      ]),
      transition('normal => small', [
        animate('95ms ease-in')
      ]),
      state('small', style({ width: '92px' })),
      state('normal', style({ width: '100%' }))
    ]),
    trigger('rotateAnim', [
      transition('void => *', [
        style({ opacity: '0' }),
        animate('85ms ease-out', style({ opacity: '1', transform: 'rotateZ(0deg)' }))
      ]),
      transition('* => void', [
        animate('65ms ease-in', style({ opacity: '0', transform: 'rotateZ(45deg)' }))
      ]),
    ]),
    trigger('titleAnim', [
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(-20%)' }),
        animate('175ms ease-out', style({ opacity: '1', transform: 'translateY(0)' }))
      ]),
    ]),
  ]
})
export class FivToolbarSearch implements OnInit, OnChanges {

  searching = false;
  titleVisible = true;
  closeButtonVisible = false;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() color: string;
  @Input() small = false;
  @Output() fivInputChange: EventEmitter<any> = new EventEmitter();
  @Output() fivClose: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();

  state: 'small' | 'normal' = 'normal';

  constructor(public renderer: Renderer2) { }

  ngOnInit() {
    this.state = this.small ? 'small' : 'normal';
  }

  shrink() {
    this.state = 'small';
  }
  grow() {
    this.state = 'normal';
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes && changes.small && changes.small.previousValue === true && changes.small.currentValue === false) {
      this.state = 'normal';
      return;
    }
    if (changes && changes.small && changes.small.previousValue === false && changes.small.currentValue === true) {
      this.state = 'small';
      return;
    }
  }

  openSearchbar() {
    if (this.small) {
      this.state = 'normal';
      return;
    }
    this._open();
  }

  toggleSearchbar() {
    if (this.searching) {
      this.closeSearchbar();
    } else {
      this.openSearchbar();
    }
  }


  searchBarStateChange(event) {

    if (event.fromState === 'normal' && event.toState === 'small') {

    }

    if (event.fromState === 'small' && event.toState === 'normal') {
      this._open();
    }

  }

  private _open() {
    this.searching = true;
    this.titleVisible = false;
    this.open.emit();
  }

  closeSearchbar() {
    if (this.small) {
      this.state = 'small';
    }
    this.searching = false;
    this.fivClose.emit();

  }


  searchAnimDone(event) {

    if (event.fromState !== 'void') {
      this.closeButtonVisible = true;
    }
  }

  closeAnimDone(event) {

    if (event.fromState !== 'void') {
      this.searching = false;
    }
  }

  seachbarAnimDone(event, input: IonInput) {
    if (event.fromState !== 'void') {
      this.titleVisible = true;
    } else {
      input.setFocus();
    }
  }

}
