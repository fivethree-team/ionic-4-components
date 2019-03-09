import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fiv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class FivButton implements OnInit {

  @Input() icon: string;
  @Input() text: string;
  @Input() color: string;
  @Input() disabled: boolean;
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
