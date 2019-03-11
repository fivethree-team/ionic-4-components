import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'fiv-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.scss'],
})
export class NetworkStatusComponent implements OnInit {
  visible = true;
  status: 'online' | 'offline' = 'online';

  onClick = new EventEmitter<NetworkStatusComponent>();

  constructor() { }

  ngOnInit() {

  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  setStatus(status: 'online' | 'offline') {
    this.status = status;
  }

  networkStatusClicked() {
    this.onClick.emit(this);
  }

}
