import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  Renderer2
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'fiv-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  animations: [
    trigger('searchbarAnim', [
      transition('small => normal', [animate('125ms ease-out')]),
      transition('normal => small', [animate('95ms ease-in')]),
      state('small', style({ width: '{{width}}px' }), {
        params: { width: 120 }
      }),
      state('normal', style({ width: '100%' }))
    ]),
    trigger('titleAnim', [
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(-20%)' }),
        animate(
          '175ms ease-out',
          style({ opacity: '1', transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class FivSearchbar implements OnInit {
  searching = false;
  titleVisible = true;
  closeButtonVisible = false;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() smallWidth = 120;
  @Input() searchIcon = 'search';
  @Input() closeIcon = 'close';

  _small = false;
  @Input() set small(s: boolean) {
    if (s && !this._small) {
      this.shrink();
    } else if (!s && this._small) {
      this.grow();
    }
    this._small = s;
  }
  get small() {
    return this._small;
  }
  @Output() fivInputChange: EventEmitter<any> = new EventEmitter();
  @Output() fivClose: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();

  state: 'small' | 'normal' = 'normal';

  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    this.state = this._small ? 'small' : 'normal';
  }

  shrink() {
    this.state = 'small';
  }
  grow() {
    this.state = 'normal';
  }

  openSearchbar() {
    if (this._small) {
      this.state = 'normal';
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
