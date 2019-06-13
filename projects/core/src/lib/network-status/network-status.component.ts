import { Component, OnInit, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'fiv-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.scss'],
  animations: [
    trigger('status', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('550ms 200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FivNetworkStatus implements OnInit {
  visible = true;
  status: 'online' | 'offline' = 'online';

  onClick = new EventEmitter<FivNetworkStatus>();

  constructor() {}

  ngOnInit() {}

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  setStatus(status: 'online' | 'offline') {
    this.status = status;
  }

  FivNetworkStatusClicked() {
    this.onClick.emit(this);
  }
}
