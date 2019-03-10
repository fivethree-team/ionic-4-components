import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fiv-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.scss'],
})
export class NetworkStatusComponent implements OnInit {
  off: boolean;

  constructor() { }

  ngOnInit() {

  }

  toggleOff() {
    this.off = !this.off;
  }

}
